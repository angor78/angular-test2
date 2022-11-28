import {Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  grades = ['math=5', 'rus=4']

  getGrade(grade: string) {
    this.grades.push(grade)
  }
}
