import { CartActions, ECartActions } from './../actions/cart.action';
import {
  ECategoryActions,
  CategoryActions
} from './../actions/category.action';
import { IProductState, initialProductSate } from '../state/product.state';
import { ProductActions, EProductActions } from '../actions/product.actions';
import { ELoginActions, LoginActions } from '../actions/login.action';
import { LocalstorageService } from '../../modules/shared/services/localstorage.service';

const storage: LocalstorageService = new LocalstorageService();

export const productReducer = (
  state: IProductState = initialProductSate,
  action: ProductActions | CategoryActions | CartActions | LoginActions
): IProductState => {
  switch (action.type) {
    case EProductActions.GetProductsSuccess: {
      return { ...state, products: action.payload, error: null };
    }
    case EProductActions.GetProductsPerCategorySuccess: {
      return {
        ...state,
        products: action.payload
      };
    }
    case EProductActions.GetProduct: {
      return {
        ...state,
        currentProduct: state.products.filter(
          prodcut => prodcut.id === action.payload
        ),
        error: null
      };
    }
    case EProductActions.SearchProductsSuccess: {
      return {
        ...state,
        products: action.payload,
        error: null
      };
    }
    case ECategoryActions.GetCategorysSuccess: {
      return { ...state, categories: action.payload, error: null };
    }
    case ECartActions.AddCart: {
      return {
        ...state,
        cart: Object.assign(state.cart, {
          items: [...state.cart.items, action.payload]
        })
      };
    }
    case ECartActions.RemoveFromCart: {
      return {
        ...state,
        cart: Object.assign(state.cart, {
          items: state.cart.items.filter(
            items => items.product_variant_id !== action.payload
          )
        })
      };
    }
    case ELoginActions.GetLoginsSuccess: {
      console.log(action.payload);
      return {
        ...state, login: action.payload
      };
    }
    case ELoginActions.GetLoginsFailure: {
      storage.removefile('user');
      storage.removefile('token');
      return {
        ...state, login: { user: null, token: null}
      };
    }
    case ELoginActions.LogOut: {
      storage.removefile('user');
      storage.removefile('token');
      return {
        ...state, login: { user: null, token: null}
      };
    }
    default:
      return state;
  }
};
