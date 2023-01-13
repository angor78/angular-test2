import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, catchError, EMPTY, map, Observable} from "rxjs";
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

  constructor(private http: HttpClient,
              private coolLoggerService: CoolLoggerService) {
  }

  getTodos():Observable<any> {
    return this.http
      .get<any>(`${environment.baseUrl}todo-lists`)
      .pipe(map(el=>el))
  }

  addTodo(title: string) {
    this.http.post<BaseResponse<{ item: Todo }>>(`${environment.baseUrl}todo-lists`,
      {title: title})
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map((res: BaseResponse<{ item: Todo }>) => {
          return [res.data.item, ...this.todos$.getValue()]
        }))
      .subscribe((todos: Todo[]) => {
        this.todos$.next(todos)
      })
  }


  removeTodo(todoId: string) {
    this.http.delete<BaseResponse>(`${environment.baseUrl}todo-lists/${todoId}`)
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(() => {
        return this.todos$.getValue().filter(el => el.id !== todoId)
      })).subscribe((todos: Todo[]) => {
      this.todos$.next(todos)
    })
  }

  private errorHandler(err: HttpErrorResponse) {
    this.coolLoggerService.log(err.message, 'error')
    return EMPTY
  }
}
