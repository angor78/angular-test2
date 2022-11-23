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
  nums = [1, 2, 3, 4, 3, 6, 7, 8]
  sortedNums = this.nums.map(el => el).sort(function (a, b) {
    return a - b;
  })



  findDisappearedNums() {
    let miss:Array<number> = []
    this.sortedNums.forEach((el: number, i: number) => el!==i+1 ? miss.push(i+1) : el)
    this.nums = miss
  }
}
