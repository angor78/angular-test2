import {Component, OnInit} from '@angular/core';
import {Todo, TodosService} from "../../services/todos.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos$ !: Observable<Todo[]>
  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todos$=this.todosService.getTodos()
  }

}
