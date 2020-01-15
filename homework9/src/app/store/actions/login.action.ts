import { Login } from './../../modules/shared/interfaces/login.interface';
import { User } from './../../modules/shared/interfaces/user.interface';
import { Action } from '@ngrx/store';

export enum ELoginActions {
  GetLogin = '[Login] Get Login',
  GetLoginsFailure = '[Login] Get LoginsFailure',
  GetLoginsSuccess = '[Login] Get Logins Success',
  LogOut = '[Login] LogOut user ',
  SaveLogin = '[Login] Save Login',
}

export class GetLoginAction implements Action {
  public readonly type = ELoginActions.GetLogin;
  constructor(public payload: User) {}
}

export class LogOutAction implements Action{
  public readonly type = ELoginActions.LogOut;
}

export class GetLoginSuccessAction implements Action {
  public readonly type = ELoginActions.GetLoginsSuccess;
  constructor(public payload: Login) {}
}

export class SaveLoginAction implements Action {
  public readonly type = ELoginActions.SaveLogin;
  constructor(public payload: Login) {}
}


export class GetLoginFailureAction implements Action {
  public readonly type = ELoginActions.GetLoginsFailure;
  public payload: Error;
  constructor(error: any) {
    this.payload = error;
  }
}

export type LoginActions =
  | GetLoginAction
  | LogOutAction
  | GetLoginSuccessAction
  | GetLoginFailureAction
  | SaveLoginAction;
