import { LocalstorageService } from './../shared/services/localstorage.service';
import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private storage: LocalstorageService, private router: Router) {

  }

  canActivate(): boolean {
    if (!this.storage.tokenStatus()) {
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }
}
