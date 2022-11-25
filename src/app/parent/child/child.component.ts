import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  @Output() sendGradeEvent = new EventEmitter<string>()
  inputGrade:string=''


  sendGradeHandler() {
   this.sendGradeEvent.emit(this.inputGrade)
  }
}
