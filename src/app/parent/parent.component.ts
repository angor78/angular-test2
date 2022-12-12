import {Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  prices: Array<number> = [7, 1, 5, 3, 6, 4]
  maxProfit = 0
  currentMin = this.prices[0]

  constructor() {
    this.prices.forEach((price) => {
      this.maxProfit = Math.max(this.maxProfit, price -this.currentMin)
      this.currentMin = Math.min(this.currentMin, price)
    })

  }


}
