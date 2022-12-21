import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, map} from "rxjs";

export interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

export interface BaseResponse<T = {}> {
  data: T
  fieldsErrors: string[]
  messages: string[]
  resultCode: number
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])

  httpOptions = {
    withCredentials: true,
    headers: {'api-key': environment.apiKey}
  }

  constructor(private http: HttpClient) {
  }

  getTodos() {
    this.http.get<Todo[]>(`${environment.baseUrl}todo-lists`,
      this.httpOptions).subscribe((res) => {
      this.todos$.next(res)
    })
  }

  addTodo() {
    this.http.post<BaseResponse<{ item: Todo }>>(`${environment.baseUrl}todo-lists`,
      {title: 'Angular1'}, this.httpOptions)
      .pipe(map((res: BaseResponse<{ item: Todo }>) => {
        return [res.data.item, ...this.todos$.getValue()]
      }))
      .subscribe((todos: Todo[]) => {
        this.todos$.next(todos)
      })
  }


  removeTodo(todoId: string) {
    this.http.delete<BaseResponse>(`${environment.baseUrl}todo-lists/${todoId}`,
      this.httpOptions)
      .pipe(map(() => {
        return this.todos$.getValue().filter(el => el.id !== todoId)
      })).subscribe((todos: Todo[]) => {
      this.todos$.next(todos)
    })
  }
}
