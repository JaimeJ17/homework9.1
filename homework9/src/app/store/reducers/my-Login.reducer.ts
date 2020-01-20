import { userInitialState } from './../state/constants/user-initialState.constant';
import { loginInitialState } from './../state/constants/login-initialState.constant';
import { Login } from './../../modules/shared/interfaces/login.interface';
import { LocalstorageService } from 'src/app/modules/shared/services/localstorage.service';
import { LoginActions, ELoginActions } from '../actions/login.action';
import { userState } from '../state/constants/user-initialState.constant';
import { tokenState } from '../state/constants/token-initialState.constant';
const storage: LocalstorageService = new LocalstorageService();


export interface LoginState {
  login: Login;
}


const defualtLogin: LoginState = {
  login: loginInitialState
};



export function loginReducer(
  state: LoginState = defualtLogin,
  action: LoginActions
): LoginState {
  switch (action.type) {
    case ELoginActions.GetLoginsSuccess: {
      return {
        ...state,
        login: action.payload
      };
    }
    case ELoginActions.GetLoginsFailure: {
      storage.removefile('user');
      storage.removefile('token');
      return {
        ...state,
        login: { user: userState, token: tokenState }
      };
    }
    case ELoginActions.LogOut: {
      storage.removefile('user');
      storage.removefile('token');
      return {
        ...state,
        login: { user: userInitialState, token: null }
      };
    }
    default:
      return { ...state };
  }
}
