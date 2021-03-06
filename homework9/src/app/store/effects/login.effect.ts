import { GetErrorAction } from './../actions/error.actions';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ConnectorService } from '../../modules/shared/services/connector.service';

import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  GetLoginAction,
  ELoginActions,
  GetLoginSuccessAction,

} from '../actions/login.action';
import { LocalstorageService } from '../../modules/shared/services/localstorage.service';
import { IAppState } from '../state/app.state';
import { Store } from '@ngrx/store';

@Injectable()
export class LoginEffects {
  constructor(
    private actions: Actions,
    private loginService: ConnectorService,
    private StorageService: LocalstorageService,
    private store: Store<IAppState>

    ) {}

  @Effect()
  getLogin$ = this.actions.pipe(
    ofType<GetLoginAction>(ELoginActions.GetLogin),
    switchMap(user => this.loginService.login(user.payload)),
    switchMap(user => {
      this.StorageService.savefile(user.data.user, 'user');
      this.StorageService.savefile(user.data.token, 'token');
      return of(new GetLoginSuccessAction(user.data));
    }),
    catchError((error, caugth) => {
      this.store.dispatch(new GetErrorAction(error.error));
      return caugth;
    }),
  );
}
