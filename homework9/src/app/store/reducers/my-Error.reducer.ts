import { EErrorActions, GetErrorAction } from './../actions/error.actions';
import { Error } from './../../modules/shared/interfaces/error.interface';

export interface ErrorState  {
  error: Error;
}

const defaultError: ErrorState = {
  error: {
    errors : []
  }
};


export function errorReducer(state: ErrorState = defaultError, action: GetErrorAction): ErrorState {
  switch (action.type) {
    case EErrorActions.GetError: {
      return { ...state, error: action.payload };
    }

    default: {
      return {... state};
    }
  }
}
