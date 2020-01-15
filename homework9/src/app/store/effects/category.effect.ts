import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ConnectorService } from '../../modules/shared/services/connector.service';

import { switchMap, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { GetCategoryAction, GetCategorysSuccessAction, GetCategorysFailureAction, ECategoryActions } from '../actions/category.action';


@Injectable()
export class CategoriesEffects {
  constructor(
    private _actions: Actions,
    private _categoryService: ConnectorService,
  ) { }

  @Effect()
  getCategories$ = this._actions.pipe(
    ofType<GetCategoryAction>(ECategoryActions.GetCategory),
    switchMap(() => this._categoryService.category()),
    switchMap(categories => of(new GetCategorysSuccessAction(categories.data))),
    catchError(error => of(new GetCategorysFailureAction(error))),
  );
}
