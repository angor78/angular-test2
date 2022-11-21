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
  isAppLoading = true
  text = ''
  text2 = ''

  constructor() {
    setTimeout(() => {
      this.isAppLoading = false
    }, 3000)
  }

  changeTitleHandler() {
    this.title = '123'
  }

  changeTextHandler($event: Event) {
    this.text = ($event.currentTarget as HTMLInputElement).value
  }

  changeText2Handler($event: Event) {
    this.text2 = ($event.currentTarget as HTMLInputElement).value
  }
}
