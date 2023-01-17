import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "./services/auth.service";
import {CoolLoggerService} from "./services/cool-logger.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {CredentialsInterceptor} from "./interceptors/credentials.interceptor";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthService, CoolLoggerService,{provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true}]
})
export class CoreModule {
}
