import {Component} from '@angular/core';

interface Fruit {
  id: number
  name: string
  price: number
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  fruits: Fruit[] = [
    {id: 1, name: 'apple', price: 10},
    {id: 2, name: 'orange', price: 20},
    {id: 3, name: 'watermelon', price: 30},
    {id: 4, name: 'banana', price: 40},
    {id: 5, name: 'pears', price: 50},
    {id: 6, name: 'raspberries', price: 60},
    {id: 7, name: 'avocados', price: 70},
    {id: 8, name: 'mangoes', price: 80},
    {id: 9, name: 'kiwi', price: 90},
  ]
}
