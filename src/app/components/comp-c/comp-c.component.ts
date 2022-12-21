import {Component, OnInit} from '@angular/core';
import {Todo, TodosService} from "../../services/todos.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent implements OnInit {
  error: string = ''
  todos$!: Observable<Todo[]>
  title:string=''

  constructor(private todosService: TodosService) {
  }


  ngOnInit(): void {
    //Subscribe
    this.todos$ = this.todosService.todos$

    this.getTodos()

  }

  getTodos() {
    return this.todosService.getTodos()
  }

  addTodoHandler() {
    this.todosService.addTodo(this.title)
  }

  removeTodoHandler(todoId: string) {
    this.todosService.removeTodo(todoId)
  }
}

