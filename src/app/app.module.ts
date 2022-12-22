import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CompAComponent} from './components/comp-a/comp-a.component';
import {CompBComponent} from './components/comp-b/comp-b.component';
import {ValueService} from "./services/value.service";
import {CompCComponent} from './components/comp-c/comp-c.component';
import {HttpClientModule} from "@angular/common/http";
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent,
    CompCComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ValueService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
