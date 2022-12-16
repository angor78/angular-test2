import { Component, OnInit } from '@angular/core';
import {ValueService} from "../../services/value.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent implements OnInit {
  value$ = new Observable()

  constructor(private valueService: ValueService) {
  }

  ngOnInit(): void {
    this.value$=this.valueService.value$
  }

  addHandler() {
    this.valueService.add()
  }
}