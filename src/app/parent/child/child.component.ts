import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  @Output() sendEventGrade = new EventEmitter<string>()
  grade:string=''
  sendGradeHandler() {
    this.sendEventGrade.emit(this.grade)
  }
}
