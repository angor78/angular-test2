import {Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  grades: Array<string> = ['math:5', 'english:3']
  clumb: number = 1

  getGrade($event: string) {
    this.grades.push($event)
  }

  // @ts-ignore
  countClumb() {
    if (this.clumb === 1) {
      return 1
    }
    let n1:number=1
    let n2:number=2
    for (let i=3; i<this.clumb+1; i++){
      // @ts-ignore
      n1=n2
      n2=n1+n2
    }
   this.clumb=n2
  }
}
