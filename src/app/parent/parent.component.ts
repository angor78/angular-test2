import {Component} from '@angular/core';

export interface Address {
  city: string,
  country: string
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  name = 'Alex'
  surname = 'Petrov'
  address: Address = {
    city: 'Penza',
    country: 'Russia'
  }

}
