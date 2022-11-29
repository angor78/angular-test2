import {Component} from '@angular/core';

interface WeekGrades {
  id: number
  gradeItem: number
}

interface Lessons {
  id: number
  title: string
  weekGrades: WeekGrades[]
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  Lessons: Lessons[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        {
          id: 0,
          gradeItem: 2
        },
        {
          id: 1,
          gradeItem: 3
        }
      ]
    },
    {
      id: 1,
      title: 'Rus',
      weekGrades: [
        {
          id: 0,
          gradeItem: 5
        },
        {
          id: 1,
          gradeItem: 4
        }
      ]
    }
  ]

  // getGrade(grade: string) {
    // this.grades.push(grade)
  // }
}
