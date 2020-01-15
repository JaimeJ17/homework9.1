import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ConnectorService } from '../../modules/shared/services/connector.service';

import { switchMap, catchError, finalize, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { GetLoginAction, ELoginActions, GetLoginSuccessAction, GetLoginFailureAction, SaveLoginAction } from '../actions/login.action';
import { LocalstorageService } from '../../modules/shared/services/localstorage.service';


@Injectable()
export class LoginEffects {
  constructor(
    private _actions: Actions,
    private _LoginService: ConnectorService,
    private _StorageService: LocalstorageService
  ) { }

  @Effect()
  getLogin$ = this._actions.pipe(
    ofType<GetLoginAction>(ELoginActions.GetLogin),
    switchMap((user) => this._LoginService.login(user.payload)),
    switchMap(user => of(new GetLoginSuccessAction(user.data))),
    tap((user) => {
      this._StorageService.savefile(user.payload.user, 'user');
      this._StorageService.savefile(user.payload.token, 'token');
    }),
    catchError(error => of(new GetLoginFailureAction(error))),
  );
}

