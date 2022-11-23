import {Component, Input} from '@angular/core';
import {Address} from "../parent.component";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  name = 'Andrey'
  @Input() surname?: string
  @Input() address?: Address
}
