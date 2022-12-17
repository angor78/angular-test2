import {Component, OnInit} from '@angular/core';
import {ValueService} from "../../services/value.service";
import {Observable} from "rxjs";
import {CoolLoggerService} from "../../services/cool-logger.service";

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
})
export class CompAComponent implements OnInit {
  value$ = new Observable()

  constructor(private valueService: ValueService,
              private coolLoggerServer:CoolLoggerService) {
  }

  ngOnInit(): void {
    this.value$ = this.valueService.value$
  }

  decHandler() {
    this.valueService.dec()
    this.coolLoggerServer.log('dec','error')
  }
}
