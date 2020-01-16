import { GetLoginAction } from './../../../../store/actions/login.action';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
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

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
  }

  loginCheck(button: HTMLButtonElement) {
    button.disabled = true;
    this.store.dispatch(new GetLoginAction(this.buildUser()));
    button.disabled = false;
  }

  getControl(input: string) {
    return this.loginForm.get(input);
  }

  buildUser() {
    return {
      email: this.getControl('email').value,
      password: this.getControl('password').value
    };
  }
}
