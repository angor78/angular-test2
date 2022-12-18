import {Component, OnInit} from '@angular/core';
import {ValueService} from "../../services/value.service";
import {Observable} from "rxjs";
import {CoolLoggerService} from "../../services/cool-logger.service";

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent implements OnInit {
  value$ = new Observable()
  nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  maxSum = this.nums[0]
  currentSum = this.nums[0]

  constructor(private valueService: ValueService,
              private coolLoggerService: CoolLoggerService) {
  }

  ngOnInit(): void {
    this.value$ = this.valueService.value$
  }

  addHandler() {
    this.valueService.add()
    this.coolLoggerService.log('add', 'success')
  }

  getSubArrayHandler() {
    this.nums.forEach((num) => {
      this.currentSum = Math.max(this.currentSum + num, num)
      this.maxSum = Math.max(this.currentSum, this.maxSum)
    })
  }
}
