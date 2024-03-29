import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {ProfileModule} from "./profile/profile.module";
import {ShareModule} from "./share/share.module";
import {AuthModule} from "./auth/auth.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // TodosModule,
    // UsersModule,
    CoreModule,
    ProfileModule,
    AuthModule,
    // HomeModule,
    ShareModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

//app module
//feature module
//share module
//core module
