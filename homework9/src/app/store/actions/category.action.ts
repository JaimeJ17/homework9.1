import { Category } from './../../modules/shared/interfaces/category.interface';
import { Action } from '@ngrx/store';

export enum ECategoryActions {
  GetCategory = '[Category] Get Category',
  GetCategorysFailure = '[Category] Get CategorysFailure',
  GetCategorysSuccess = '[Category] Get Categorys Success',
  ToggleCategory = '[Category] Toggle Category',
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


export class ToggleCategoryAction implements Action {
  public readonly type = ECategoryActions.ToggleCategory;
}

export type CategoryActions =
  | GetCategoryAction
  | GetCategorysSuccessAction
  | ToggleCategoryAction
  | GetCategorysFailureAction;
