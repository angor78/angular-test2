import {Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  grades: Array<string> = ['math:5', 'english:3']
  n: number = 1
  step: number = 0

  getGrade($event: string) {
    this.grades.push($event)
  }

  // @ts-ignore
  countClumb(n: number) {
    return this.step = n <= 1
      ? 1
      : this.countClumb(n - 1) + this.countClumb(n - 2)
  }

}
