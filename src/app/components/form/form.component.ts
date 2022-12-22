import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl,
    password: new FormControl
  })


  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('User' + ' ' + this.loginForm.value.email + ' ' + 'login')
  }
}
