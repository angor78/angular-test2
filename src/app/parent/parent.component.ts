import {Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  isSuccess = true
  constructor() {
    setTimeout(()=>{this.isSuccess=false},3000)

  }
}
