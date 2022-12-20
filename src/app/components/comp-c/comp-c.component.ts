import {Component, OnInit} from '@angular/core';
import {BaseResponse, Todo, TodosService} from "../../services/todos.service";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent implements OnInit {
  todos: Todo[] = []
  error: string = ''

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.todosService.getTodos().subscribe(
      {
        next: (res: Todo[]) => {
          this.todos = res
        },
        error: (error: HttpErrorResponse) => {
          this.error = error.message
        }
      })
  }

  addTodoHandler() {
    this.todosService.addTodo().subscribe((res: BaseResponse<{ item: Todo }>) => {
        this.todos.unshift(res.data.item)
      }
    )
  }

  removeTodoHandler(todoId: string) {
    this.todosService.removeTodo(todoId).subscribe(() => {
      this.todos = this.todos.filter((el) => {
        return el.id !== todoId
      })
    })
  }
}
