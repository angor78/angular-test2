import {Component, OnInit} from '@angular/core';
import {ValueService} from "../../services/value.service";

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
})
export class CompAComponent implements OnInit {
  value = 0

  constructor(private valueService: ValueService) {
  }

  ngOnInit(): void {
    this.valueService.value$.subscribe((value) => {
      this.value = value
    })
  }

  decHandler() {
    this.valueService.dec()
  }
}
