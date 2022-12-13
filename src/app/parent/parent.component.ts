import {Component} from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  title = 'Lorem ipsum dolor sit amet.'
  url='https://angular.io/api/core/Pipe'
  date= new Date(2022,4,1,2,1)
}
