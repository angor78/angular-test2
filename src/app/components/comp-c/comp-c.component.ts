import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent implements OnInit {
  todos: Todo[] = []
  httpOptions = {
    withCredentials: true,
    headers: {'api-key': 'bd4ae310-899e-41ab-b129-c57668c4e43e'}
  }

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists',
      this.httpOptions).subscribe((res: Todo[]) => {
      this.todos = res
    })
  }

  addTodoHandler() {
    this.http.post('https://social-network.samuraijs.com/api/1.1/todo-lists',
      {title: 'Angular1'}, this.httpOptions).subscribe((res: any) => {
        this.todos.unshift(res.data.item)
      }
    )
  }

  removeTodoHandler(todoId: string) {
    this.http.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`,
      this.httpOptions).subscribe(() => {
      this.todos = this.todos.filter((el) => {
       return el.id !== todoId
      })
    })
  }
}
