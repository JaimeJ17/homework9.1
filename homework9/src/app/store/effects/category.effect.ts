import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ConnectorService } from '../../modules/shared/services/connector.service';

import { switchMap, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import {
  GetCategoryAction,
  GetCategorysSuccessAction,
  GetCategorysFailureAction,
  ECategoryActions,
  GetCategoriesAction,
  GetCategoriesSuccessAction,
  GetCategoriesFailureAction
} from '../actions/category.action';
import { IAppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { GetErrorAction } from '../actions/error.actions';

@Injectable()
export class CategoriesEffects {
  constructor(
    private actions: Actions,
    private categoryService: ConnectorService,
    private store: Store<IAppState>
  ) {}

  @Effect()
  getCategories$ = this.actions.pipe(
    ofType<GetCategoryAction>(ECategoryActions.GetCategory),
    switchMap(() => this.categoryService.category()),
    switchMap(categories => of(new GetCategorysSuccessAction(categories.data))),
    catchError((error, caugth) => {
      this.store.dispatch(new GetCategorysFailureAction(error));
      return caugth;
    })
  );

  @Effect()
  getAllCategories$ = this.actions.pipe(
    ofType<GetCategoriesAction>(ECategoryActions.GetCategories),
    switchMap(() => this.categoryService.category()),
    switchMap(categories =>
      of(new GetCategoriesSuccessAction(categories.data))
    ),
    catchError((error, caugth) => {
      console.log(error);
      this.store.dispatch(new GetErrorAction(error ? error.error : error));
      return caugth;
    })
  );
}
