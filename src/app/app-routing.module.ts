import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/components/home/home.component";
import {LoginComponent} from "./auth/components/login/login.component";
import {UsersComponent} from "./users/components/users/users.component";
import {ProfileComponent} from "./profile/components/profile/profile.component";
import {TodosComponent} from "./todos/components/todos/todos.component";
import {NotFoundComponent} from "./share/components/not-found/not-found.component";
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
