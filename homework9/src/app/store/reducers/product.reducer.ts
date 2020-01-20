import { CartActions, ECartActions } from './../actions/cart.action';
import {
  ECategoryActions,
  CategoryActions
} from './../actions/category.action';
import { IProductState, initialProductSate } from '../state/product.state';
import { ProductActions, EProductActions } from '../actions/product.actions';
import { ELoginActions, LoginActions } from '../actions/login.action';
import { LocalstorageService } from '../../modules/shared/services/localstorage.service';
import { userState } from '../state/constants/user-initialState.constant';
import { tokenState } from '../state/constants/token-initialState.constant';

const storage: LocalstorageService = new LocalstorageService();

export function productReducer(
  state: IProductState = initialProductSate,
  action: ProductActions | CategoryActions | CartActions | LoginActions
): IProductState {
  switch (action.type) {

    case ECategoryActions.ToggleCategory: {
      return { ...state, toggle: !state.toggle };
    }

    default:
      return { ...state };
  }
}
