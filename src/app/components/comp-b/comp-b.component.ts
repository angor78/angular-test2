import { Component, OnInit } from '@angular/core';
import {ValueService} from "../../services/value.service";

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent implements OnInit {
  value = 0

  constructor(private valueService: ValueService) {
  }

  ngOnInit(): void {
    this.valueService.value$.subscribe((value)=>{this.value=value})
  }

  addHandler() {
    this.valueService.add()
  }
}
