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

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists',
      {
        withCredentials: true,
        headers: {"API-KEY": "bd4ae310-899e-41ab-b129-c57668c4e43e"},
      }
    ).subscribe((res: Todo[]) => {
      this.todos = res
    })
  }
}
