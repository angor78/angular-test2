import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ValueService} from "./services/value.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './home/components/home/home.component';
import {LoginComponent} from './auth/components/login/login.component';
import {TodosComponent} from './todos/components/todos/todos.component';
import {UsersComponent} from './users/components/users/users.component';
import {ProfileComponent} from './profile/components/profile/profile.component';
import {NotFoundComponent} from './share/components/not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {CredentialsInterceptor} from "./interceptors/credentials.interceptor";
import { NavigationComponent } from './share/components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TodosComponent,
    UsersComponent,
    ProfileComponent,
    NotFoundComponent,
    NavigationComponent,
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
