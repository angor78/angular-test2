import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl<any>(''),
    password: new FormControl<any>('')
  })


  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('User' + ' ' + this.loginForm.value.email + ' ' + 'login')
  }
}
