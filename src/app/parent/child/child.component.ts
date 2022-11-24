import {Component, EventEmitter, Output} from '@angular/core';
export interface Grade {
  math:number
  rus:number
}
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {

  @Output() sendGradeEvent = new EventEmitter<Grade>()

  sendGradeHandler() {
    const math = 5
    const rus = 4
    this.sendGradeEvent.emit({math, rus})
  }
}
