import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormErrorComponent } from '../form-error/form-error.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

class RouterStub {
  navigate(params: Array<string>) {}
}

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, FormErrorComponent],
      imports: [
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      providers: [provideMockStore(), { provide: Router, useClass: RouterStub }]
    }).compileComponents();
    store = TestBed.get<Store<any>>(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('builduser creates a email and user', () => {
    expect(component.buildUser()).toBeTruthy({
      email: undefined,
      password: undefined
    });
  });

  it('Check if LoginForm exists', () => {
    expect(component.loginForm).toBeTruthy();
  });

  it('Check if LoginForm has email control', () => {
    expect(component.loginForm.contains('email')).toBeTruthy();
  });

  it('Check if email is invalid when not email format', () => {
    const email = component.loginForm.get('email');
    email.setValue('error');
    expect(email.valid).toBeFalsy();
  });

  it('Check if email is valid when  email format', () => {
    const email = component.loginForm.get('email');
    email.setValue('email@example.com');
    expect(email.valid).toBeTruthy();
  });

  it('Check if LoginForm has Password control', () => {
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('Check if name is invalid when empty', () => {
    const password = component.loginForm.get('password');
    password.setValue('');
    expect(password.valid).toBeFalsy();
  });

  it('Check if password is valid when write anything but empty', () => {
    const password = component.loginForm.get('password');
    password.setValue('21344');
    expect(password.valid).toBeTruthy();
  });

  it('Check if Button exists', () => {
    const htmlComp: HTMLElement = fixture.nativeElement;
    const button = htmlComp.querySelector('button');
    expect(button).toBeDefined();
  });

  it('loginCheck should redirect the user to home after one second', fakeAsync(() => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    const spyStore = spyOn(store, 'dispatch');
    component.loginCheck();
    expect(spyStore).toHaveBeenCalled();
    tick(1002);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalledWith(['/home']);
    });
  }));
});
