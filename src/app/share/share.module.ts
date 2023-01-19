import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from "./components/navigation/navigation.component";
import {RouterModule} from "@angular/router";
import {NotFoundComponent} from "./components/not-found/not-found.component";


@NgModule({
  declarations: [NavigationComponent, NotFoundComponent],
  exports: [
    NavigationComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ShareModule {
}
