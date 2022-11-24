import {Component} from '@angular/core';
import {Grade} from "./child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  math?: number
  rus?: number
  nums = [1, 1, 2, 2, 3]
  single=0

  getGrade(value: Grade) {
    this.math = value.math
    this.rus = value.rus
  }

  singleNum() {
    let mask = 0
    this.nums.forEach(num => mask ^= num)
    this.single=mask
  }
}
