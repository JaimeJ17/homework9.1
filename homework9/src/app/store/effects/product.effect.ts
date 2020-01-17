import {
  GetProductsPerCategoryAction,
  GetProductsPerCategoryFailureAction,
  SearchProductsActions,
  GetProductsPerCategorySuccessAction,
  LikeProductFailureActions
} from './../actions/product.actions';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ConnectorService } from '../../modules/shared/services/connector.service';
import {
  EProductActions,
  GetProductsSuccessAction,
  GetProductsFailureAction,
  GetProductsAction
} from '../actions/product.actions';
import { switchMap, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { IAppState } from '../state/app.state';
import {
  SearchProductsSuccesstsActions,
  SearchProductsFailureActions
} from '../actions/product.actions';
import { Store } from '@ngrx/store';
import { LikeProductAction, LikeProductSuccesstsActions } from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions: Actions,
    private productService: ConnectorService,
    private store: Store<IAppState>
  ) {}

  @Effect()
  getProducts$ = this.actions.pipe(
    ofType<GetProductsAction>(EProductActions.GetProducts),
    switchMap(() => this.productService.product()),
    switchMap(products => of(new GetProductsSuccessAction(products.data))),
    catchError((error, caugth) => {
      this.store.dispatch(new GetProductsFailureAction(error));
      return caugth;
    })
  );

  @Effect()
  getProductsCategory$ = this.actions.pipe(
    ofType<GetProductsPerCategoryAction>(
      EProductActions.GetProductsPerCategory
    ),
    switchMap(search => this.productService.productCategory(search.payload)),
    switchMap(products =>
      of(new GetProductsPerCategorySuccessAction(products.data))
    ),
    catchError((error, caugth) => {
      this.store.dispatch(new GetProductsPerCategoryFailureAction(error));
      return caugth;
    })
  );

  @Effect()
  searchProducts$ = this.actions.pipe(
    ofType<SearchProductsActions>(EProductActions.SearchProducts),
    switchMap(search => this.productService.productSearch(search.payload)),
    switchMap(products =>
      of(new SearchProductsSuccesstsActions(products.data))
    ),
    catchError((error, caugth) => {
      this.store.dispatch(new SearchProductsFailureActions(error));
      return caugth;
    })
  );

  @Effect()
  LikeProducts$ = this.actions.pipe(
    ofType<LikeProductAction>(EProductActions.LikeProduct),
    switchMap(like => this.productService.like(like.payload)),
    switchMap(() =>
      of(new LikeProductSuccesstsActions())
    ),
    catchError((error, caugth) => {
      this.store.dispatch(new LikeProductFailureActions(error));
      return caugth;
    })
  );
}
