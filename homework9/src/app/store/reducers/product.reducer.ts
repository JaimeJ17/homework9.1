import { CartActions, ECartActions } from './../actions/cart.action';
import {
  ECategoryActions,
  CategoryActions
} from './../actions/category.action';
import { IProductState, initialProductSate } from '../state/product.state';
import { ProductActions, EProductActions } from '../actions/product.actions';

export const productReducer = (
  state: IProductState = initialProductSate,
  action: ProductActions | CategoryActions | CartActions
): IProductState => {
  switch (action.type) {
    case EProductActions.GetProductsSuccess: {
      return { ...state, products: action.payload, error: null };
    }
    case EProductActions.GetProductsPerCategory: {
      return {
        ...state,
        filterProducts: state.products.filter(
          prodcut => prodcut.category.slug === action.payload
        )
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
    case EProductActions.SearchProducts: {
      return {
        ...state,
        filterProducts: state.products.filter(prodcut =>
          prodcut.name.includes(action.payload)
        ),
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
    default:
      return state;
  }
};
