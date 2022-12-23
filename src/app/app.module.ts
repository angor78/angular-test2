import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ValueService} from "./services/value.service";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TodosComponent } from './components/todos/todos.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TodosComponent,
    UsersComponent,
    ProfileComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'not-found', component: NotFoundComponent},
      {path: 'users', component: UsersComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'todos', component: TodosComponent},
    ]),
  ],
  providers: [ValueService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
