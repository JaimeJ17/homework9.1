import { Error } from './../../modules/shared/interfaces/error.interface';
import { Product } from './../../modules/shared/interfaces/product.interface';
import { Action } from '@ngrx/store';

export enum EProductActions {
  GetProduct = '[product] Get Product',
  GetProductsPerCategory = '[Product] Get Products per Category',
  GetProducts = '[Product] Get Products',
  GetProductsFailure = '[Product] Get Products Failure',
  GetProductsSuccess = '[Product] Get Products Success',
  SearchProducts = '[Product] Search Products',
  SearchProductsFailure = '[Product] Search Products Failure',
  SearchProductsSuccess = '[Product] Search Products Success',
}

export class GetProductAction implements Action {
  public readonly type = EProductActions.GetProduct;
  constructor(public payload: string) {}
}

export class GetProductsPerCategoryAction implements Action {
  public readonly type = EProductActions.GetProductsPerCategory;
  constructor(public payload: string) {}
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

export class SearchProductsActions implements Action {
  public readonly type = EProductActions.SearchProducts;
  constructor(public payload: string) {}
}
export type ProductActions =
  | GetProductAction
  | GetProductsPerCategoryAction
  | GetProductsAction
  | GetProductsSuccessAction
  | GetProductsFailureAction
  | SearchProductsActions;
