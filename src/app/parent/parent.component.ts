import {Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  grades:Array<string>=['math:5','english:3']

  getGrade($event: string) {
    this.grades.push($event)
  }
}
