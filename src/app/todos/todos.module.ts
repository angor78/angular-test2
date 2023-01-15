import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodosRoutingModule} from './todos-routing.module';
import {TodosComponent} from "./components/todos/todos.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";


@NgModule({
  declarations: [
    TodosComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TodosRoutingModule
  ],
  exports:[TodosComponent]

})
export class TodosModule { }
