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

}
