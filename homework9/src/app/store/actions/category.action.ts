import { Category } from './../../modules/shared/interfaces/category.interface';
import { Action } from '@ngrx/store';

export enum ECategoryActions {
  GetCategory = '[Category] Get Category',
  GetCategories = '[Category] Get Categories',
  GetCategoriesFailure = '[Category] Get Categories Failure',
  GetCategoriesSuccess = '[Category] Get Categories Success',
  GetCategorysFailure = '[Category] Get CategorysFailure',
  GetCategorysSuccess = '[Category] Get Categorys Success',
  ToggleCategory = '[Category] Toggle Category',
}

export class GetCategoryAction implements Action {
  public readonly type = ECategoryActions.GetCategory;
}

export class GetCategoriesAction implements Action {
  public readonly type = ECategoryActions.GetCategories;
}

export class GetCategoriesSuccessAction implements Action {
  public readonly type = ECategoryActions.GetCategoriesSuccess;
  constructor(public payload: Category[]) {}
}

export class GetCategoriesFailureAction implements Action {
  public readonly type = ECategoryActions.GetCategoriesFailure;
  public payload: Error;
  constructor(error: any) {
    this.payload = error;
  }
}

export class GetCategorysSuccessAction implements Action {
  public readonly type = ECategoryActions.GetCategorysSuccess;
  constructor(public payload: Category[]) {}
}

export class GetCategorysFailureAction implements Action {
  public readonly type = ECategoryActions.GetCategorysFailure;
  public payload: Error;
  constructor(error: any) {
    this.payload = error;
  }
}

export class ToggleCategoryAction implements Action {
  public readonly type = ECategoryActions.ToggleCategory;
}

export type CategoryActions =
  | GetCategoryAction
  | GetCategorysSuccessAction
  | ToggleCategoryAction
  | GetCategoriesAction
  | GetCategoriesFailureAction
  | GetCategoriesSuccessAction
  | GetCategorysFailureAction;
