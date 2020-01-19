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
      this.store.dispatch(new GetCategoriesFailureAction(error));
      return caugth;
    })
  );
}
