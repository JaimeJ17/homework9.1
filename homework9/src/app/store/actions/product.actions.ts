import { Error } from './../../modules/shared/interfaces/error.interface';
import { Product } from './../../modules/shared/interfaces/product.interface';
import { Action } from '@ngrx/store';
import { Like } from 'src/app/modules/shared/interfaces/like.interface';

export enum EProductActions {
  GetProduct = '[product] Get Product',
  GetProductsPerCategory = '[Product] Get Products per Category',
  GetProductsPerCategorySuccess = '[Product] Get Products per Category Success',
  GetProductsPerCategoryFailure = '[Product] Get Products per Category Failure',
  SaveFilterCategory = '[Product] new Product FIlter',
  SaveFilterSearch = '[Product] new Product search',
  GetProducts = '[Product] Get Products',
  GetProductsFailure = '[Product] Get Products Failure',
  GetProductsSuccess = '[Product] Get Products Success',
  SearchProducts = '[Product] Search Products',
  SearchProductsFailure = '[Product] Search Products Failure',
  SearchProductsSuccess = '[Product] Search Products Success',
  LikeProduct = '[Product] Like Product',
  LikeProductSuccess = '[Product] Like Product Success',
  LikeProductFailure = '[Product] Like Product Failure',
}

export class GetProductAction implements Action {
  public readonly type = EProductActions.GetProduct;
  constructor(public payload: number) {}
}

export class GetProductsPerCategoryAction implements Action {
  public readonly type = EProductActions.GetProductsPerCategory;
  constructor(public payload: string) {}
}

export class FilterProductCategoryAction implements Action {
  public readonly type = EProductActions.SaveFilterCategory;
  constructor(public payload: string) {}
}

export class FilterProductNameAction implements Action {
  public readonly type = EProductActions.SaveFilterSearch;
  constructor(public payload: string) {}
}

export class GetProductsPerCategorySuccessAction implements Action {
  public readonly type = EProductActions.GetProductsPerCategorySuccess;
  constructor(public payload: Product[]) {}
}

export class GetProductsPerCategoryFailureAction implements Action {
  public readonly type = EProductActions.GetProductsPerCategoryFailure;
  public payload: Error;
  constructor(error: any) {
    this.payload = error;
  }
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

export class SearchProductsSuccesstsActions implements Action {
  public readonly type = EProductActions.SearchProductsSuccess;
  constructor(public payload: Product[]) {}
}

export class SearchProductsFailureActions implements Action {
  public readonly type = EProductActions.SearchProductsFailure;
  public payload: Error;
  constructor(error: any) {
    this.payload = error;
  }
}

export class LikeProductAction implements Action {
  public readonly type = EProductActions.LikeProduct;
  constructor(public payload: Like) {}
}

export class LikeProductSuccesstsActions implements Action {
  public readonly type = EProductActions.LikeProductSuccess;
}

export class LikeProductFailureActions implements Action {
  public readonly type = EProductActions.LikeProductFailure;
  public payload: Error;
  constructor(error: any) {
    this.payload = error;
  }
}

export type ProductActions =
  | GetProductAction
  | GetProductsPerCategoryAction
  | GetProductsPerCategorySuccessAction
  | GetProductsPerCategoryFailureAction
  | GetProductsAction
  | GetProductsSuccessAction
  | GetProductsFailureAction
  | SearchProductsActions
  | SearchProductsSuccesstsActions
  | SearchProductsFailureActions
  | LikeProductAction
  | LikeProductSuccesstsActions
  | LikeProductFailureActions
  | FilterProductCategoryAction
  | FilterProductNameAction;
