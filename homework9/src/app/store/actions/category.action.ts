import { Category } from './../../modules/shared/interfaces/category.interface';
import { Action } from '@ngrx/store';

export enum ECategoryActions {
  GetCategory = '[Category] Get Category',
  GetCategorysFailure = '[Category] Get CategorysFailure',
  GetCategorysSuccess = '[Category] Get Categorys Success',
}

export class GetCategoryAction implements Action {
  public readonly type = ECategoryActions.GetCategory;
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

export type CategoryActions =
  | GetCategoryAction
  | GetCategorysSuccessAction
  | GetCategorysFailureAction;
