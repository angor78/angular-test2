import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() sendGradeEvent = new EventEmitter<number>()

  sendGradeHandler() {
    const math = 5
    this.sendGradeEvent.emit(math)
  }
}
