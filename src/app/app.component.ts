import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: number = 0
  nums = [0, 1, 2, 4]
  n = this.nums.length

  findMissingNum() {
    this.title = this.n * (this.n + 1) / 2 - (this.nums.reduce((el, acc) => acc + el, 0))
    return this.title
  }
}
