import { GetProductsPerCategoryAction, GetProductsPerCategoryFailureAction } from './../actions/product.actions';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ConnectorService } from '../../modules/shared/services/connector.service';
import {
  EProductActions,
  GetProductsSuccessAction,
  GetProductsFailureAction,
  GetProductsAction,
} from '../actions/product.actions';
import { switchMap, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { GetProductsPerCategorySuccessAction } from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private _actions: Actions,
    private _productService: ConnectorService,
  ) {}

  @Effect()
  getProducts$ = this._actions.pipe(
    ofType<GetProductsAction>(EProductActions.GetProducts),
    switchMap(() => this._productService.product()),
    switchMap(products => of(new GetProductsSuccessAction(products.data))),
    catchError(error => of(new GetProductsFailureAction(error))),
  );

  @Effect()
  getProductsCategory$ = this._actions.pipe(
    ofType<GetProductsPerCategoryAction>(EProductActions.GetProductsPerCategory),
    switchMap((search) => this._productService.productCategory(search.payload)),
    switchMap(products => of(new GetProductsPerCategorySuccessAction(products.data))),
    catchError(error => of(new GetProductsPerCategoryFailureAction(error))),
  );
}
