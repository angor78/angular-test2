import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ValueService} from "./services/value.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {TodosComponent} from './components/todos/todos.component';
import {UsersComponent} from './components/users/users.component';
import {ProfileComponent} from './components/profile/profile.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {CredentialsInterceptor} from "./interceptors/credentials.interceptor";

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
    AppRoutingModule,

  ],
  providers: [ValueService, {provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
//app module
//feature module
//share module
//core module
