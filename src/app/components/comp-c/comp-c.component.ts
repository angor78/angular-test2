import {Component, OnDestroy, OnInit} from '@angular/core';
import {BaseResponse, Todo, TodosService} from "../../services/todos.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent implements OnInit, OnDestroy {
  todos: Todo[] = []
  error: string = ''
  subscriptions: Subscription = new Subscription()

  constructor(private todosService: TodosService) {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.subscriptions.add(this.todosService.getTodos().subscribe(
      {
        next: (res: Todo[]) => {
          this.todos = res
        },
        error: (error: HttpErrorResponse) => {
          this.error = error.message
        }
      })
    )
  }

  addTodoHandler() {
    this.subscriptions.add(this.todosService.addTodo().subscribe((res: BaseResponse<{ item: Todo }>) => {
          this.todos.unshift(res.data.item)
        }
      )
    )
  }

  removeTodoHandler(todoId: string) {
    this.subscriptions.add(this.todosService.removeTodo(todoId).subscribe(() => {
        this.todos = this.todos.filter((el) => {
          return el.id !== todoId
        })
      })
    )
  }
}
