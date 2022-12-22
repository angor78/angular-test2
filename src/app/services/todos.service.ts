import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, catchError, EMPTY, map} from "rxjs";
import {CoolLoggerService} from "./cool-logger.service";

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

  constructor(private http: HttpClient,
              private coolLoggerService: CoolLoggerService) {
  }

  getTodos() {
    this.http.get<Todo[]>(`${environment.baseUrl}todo-lists1`,
      this.httpOptions)
      .pipe(catchError((err: HttpErrorResponse) => {
        this.coolLoggerService.log(err.message, 'error')
        return EMPTY
      }))
      .subscribe((res) => {
        this.todos$.next(res)
      })
  }

  addTodo(title: string) {
    this.http.post<BaseResponse<{ item: Todo }>>(`${environment.baseUrl}todo-lists`,
      {title: title}, this.httpOptions)
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
