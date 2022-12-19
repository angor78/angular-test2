import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
    headers: {'api-key': 'bd4ae310-899e-41ab-b129-c57668c4e43e'}
  }

  constructor(private http: HttpClient) {
  }

  getTodos() {
    return this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists',
      this.httpOptions)
  }

  addTodo() {
    return this.http.post<BaseResponse<{ item: Todo }>>('https://social-network.samuraijs.com/api/1.1/todo-lists',
      {title: 'Angular1'}, this.httpOptions)
  }

  removeTodo(todoId: string) {
    return this.http.delete<BaseResponse>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`,
      this.httpOptions)
  }
}
