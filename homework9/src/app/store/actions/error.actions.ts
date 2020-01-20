import { Action } from '@ngrx/store';
import { Error } from 'src/app/modules/shared/interfaces/error.interface';

export enum EErrorActions {
  GetError = '[Error] Get Error',
}

export class GetErrorAction implements Action {
  public readonly type = EErrorActions.GetError;
  constructor(public payload: Error) {}
}

export type ErrorActions =
  | GetErrorAction;
