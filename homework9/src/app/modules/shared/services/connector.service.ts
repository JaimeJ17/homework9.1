import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import {  login } from '../constants/url.constant';
import { User } from '../interfaces/user.interface';
import { Response } from '../interfaces/response.interface';
import { LoadingService } from './loading.service';
import { ErrorhandlerService } from './errorhandler.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  constructor(private http: HttpClient, private loading: LoadingService, private errorService: ErrorhandlerService) { }

  register(user: User): Observable<Response> {
    this.loading.changeState(true);
    return this.http
      .post( login, user)
      .pipe(
        finalize(() => {
          this.loading.changeState(false);
        }),
        catchError((currentError: Response) => {
          this.loading.changeState(false);
          this.errorService.pitchError(currentError);
          return throwError(null);
        })
      );
  }

  login(user: User): Observable<Response> {
    this.loading.changeState(true);
    return this.http
      .post(login, user)
      .pipe(
        finalize(() => {
          this.loading.changeState(false);
        }),
        catchError((currentError: Response) => {
          this.loading.changeState(false);
          this.errorService.pitchError(currentError);
          return throwError(false);
        })
      );
  }
}
