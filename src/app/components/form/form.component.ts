import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl<any>('',
      [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}')]),
    password: new FormControl<any>('')
  })


  constructor() {
  }

  ngOnInit(): void {
  }
  get email(){return this.loginForm.get('email')}
  onSubmit() {
    alert('User' + ' ' + this.loginForm.value.email + ' ' + 'login')
  }
}
