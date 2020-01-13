import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  loginCheck(button: HTMLButtonElement) {
    button.disabled = true;
    console.log(this.loginForm.value);
    button.disabled = false;
  }

  getControl(input: string) {
    return this.loginForm.get(input);
  }
}
