import { Response } from 'src/app/modules/shared/interfaces/response.interface';
import { LocalstorageService } from './localstorage.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { FormGroup } from '@angular/forms';
import { ConnectorService } from './connector.service';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  isUserLoginSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private storage: LocalstorageService, private connector: ConnectorService) { }

  isLoggedIn(): boolean {
    return this.isUserLoginSubject.value;
  }

  updateLoginStatus() {
    this.isUserLoginSubject.next(this.storage.tokenStatus());
  }

  get loginState$() {
    return this.isUserLoginSubject.asObservable();
  }
/*
  logIn(loginForm: FormGroup) {
    return this.connector.login(loginForm.value).pipe(
      tap((result: Response) => {
      this.storage.savefile(result.token, 'token');
      this.updateLoginStatus();
    }));
  }
*/
  logOut() {
    this.storage.removefile('token');
    this.storage.removefile('user');
    this.updateLoginStatus();
  }
}
