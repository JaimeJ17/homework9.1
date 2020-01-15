import { Category } from './../interfaces/category.interface';
import { Product } from './../interfaces/product.interface';
import { product, category } from './../constants/url.constant';
import { Error } from './../interfaces/error.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { login } from '../constants/url.constant';
import { User } from '../interfaces/user.interface';
import { Response } from '../interfaces/response.interface';
import { LoadingService } from './loading.service';
import { ErrorhandlerService } from './errorhandler.service';
import { Data } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  constructor(private http: HttpClient, private loading: LoadingService) { }

  register(user: User): Observable<Response> {
    this.loading.changeState(true);
    return this.http
      .post( login, {data: user})
      .pipe(
        finalize(() => {
          this.loading.changeState(false);
        }),
        catchError(() => {
          this.loading.changeState(false);
          return throwError(null);
        })
      );
  }

  login(user: User): Observable<Response> {
    this.loading.changeState(true);
    return this.http
      .post(login, {data: user})
      .pipe(
        finalize(() => {
          this.loading.changeState(false);
        }),
        catchError(() => {
          this.loading.changeState(false);
          return throwError(false);
        })
      );
  }

  product(): Observable<Data> {
    this.loading.changeState(true);
    return this.http
      .get(product)
      .pipe(
        finalize(() => {
          this.loading.changeState(false);
        }),
        catchError(() => {
          this.loading.changeState(false);
          return throwError(false);
        })
      );
  }

  category(): Observable<Data> {
    this.loading.changeState(true);
    return this.http
      .get(category)
      .pipe(
        finalize(() => {
          this.loading.changeState(false);
        }),
        catchError(() => {
          this.loading.changeState(false);
          return throwError(null);
        })
      );
  }
}
