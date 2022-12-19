import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

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
  httpOptions = {
    withCredentials: true,
    headers: {'api-key': environment.apiKey}
  }

  constructor(private http: HttpClient) {
  }

  getTodos() {
    return this.http.get<Todo[]>(`${environment.baseUrl}todo-lists`,
      this.httpOptions)
  }

  addTodo() {
    return this.http.post<BaseResponse<{ item: Todo }>>(`${environment.baseUrl}todo-lists`,
      {title: 'Angular1'}, this.httpOptions)
  }

  removeTodo(todoId: string) {
    return this.http.delete<BaseResponse>(`${environment.baseUrl}todo-lists/${todoId}`,
      this.httpOptions)
  }
}
