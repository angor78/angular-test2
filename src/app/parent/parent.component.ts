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

  getGrade(value: Grade) {
    this.math = value.math
    this.rus = value.rus
  }
}
