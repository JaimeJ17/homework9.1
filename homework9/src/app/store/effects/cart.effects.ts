import { ECartActions, SaveCartSuccessAction } from './../actions/cart.action';
import { GetErrorAction } from './../actions/error.actions';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ConnectorService } from '../../modules/shared/services/connector.service';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { IAppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { SaveCartAction } from '../actions/cart.action';

@Injectable()
export class CartEffects {
  constructor(
    private actions: Actions,
    private cartService: ConnectorService,
    private store: Store<IAppState>

    ) {}

  @Effect()
  getCart$ = this.actions.pipe(
    ofType<SaveCartAction>(ECartActions.SaveCart),
    switchMap(user => this.cartService.cart(user.payload)),
    switchMap(() => {
      return of(new SaveCartSuccessAction());
    }),
    catchError((error, caugth) => {
      this.store.dispatch(new GetErrorAction(error.error));
      return caugth;
    }),
  );
}
