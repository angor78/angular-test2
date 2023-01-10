import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {UsersComponent} from "./components/users/users.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {TodosComponent} from "./components/todos/todos.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'profile/:userId', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'todos', component: TodosComponent, canActivate: [AuthGuard]},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
