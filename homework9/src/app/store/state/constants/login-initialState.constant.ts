import { tokenState } from './token-initialState.constant';
import { Login } from './../../../modules/shared/interfaces/login.interface';
import { userState } from './user-initialState.constant';
export const loginInitialState: Login = {
  token: tokenState,
  user: userState
};
