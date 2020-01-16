import { LocalstorageService } from './localstorage.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  constructor(private storage: LocalstorageService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const tokenRequest = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.storage.loadfile('token')
      }
    });
    console.log(tokenRequest);
    return next.handle(tokenRequest);
  }
}
