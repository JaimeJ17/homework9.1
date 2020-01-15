import { Error } from './../../modules/shared/interfaces/error.interface';
import { Product } from './../../modules/shared/interfaces/product.interface';
import { Action } from '@ngrx/store';

export enum EProductActions {
  GetProducts = '[Product] Get Products',
  GetProductsFailure = '[Product] Get ProductsFailure',
  GetProductsSuccess = '[Product] Get Products Success',
  SearchProducts = '[Product] Search Products',
  SearchProductsFailure = '[Product] Search ProductsFailure',
  SearchProductsSuccess = '[Product] Search Products Success',
}

export class GetProductsAction implements Action {
  public readonly type = EProductActions.GetProducts;
}

export class GetProductsSuccessAction implements Action {
  public readonly type = EProductActions.GetProductsSuccess;
  constructor(public payload: Product[]) {}
}

export class GetProductsFailureAction implements Action {
  public readonly type = EProductActions.GetProductsFailure;
  public payload: Error;
  constructor(error: any) {
    this.payload = error;
  }
}

export type ProductActions =
  | GetProductsAction
  | GetProductsSuccessAction
  | GetProductsFailureAction;
