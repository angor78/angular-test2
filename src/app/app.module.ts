import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ValueService} from "./core/services/value.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NotFoundComponent} from './share/components/not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {CredentialsInterceptor} from "./core/interceptors/credentials.interceptor";
import {TodosModule} from "./todos/todos.module";
import {CoreModule} from "./core/core.module";
import {ProfileModule} from "./profile/profile.module";
import {ShareModule} from "./share/share.module";
import {AuthModule} from "./auth/auth.module";
import {HomeModule} from "./home/home.module";
import {UsersModule} from "./users/users.module";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TodosModule,
    UsersModule,
    CoreModule,
    ProfileModule,
    AuthModule,
    HomeModule,
    ShareModule,
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
