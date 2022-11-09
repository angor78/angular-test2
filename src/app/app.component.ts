import {Component} from '@angular/core';


interface IUser {
  age: number
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test2';
  user: IUser = {
    age: 32,
    name: 'Ivan'
  }
}
