import { IProductState, initialProductSate } from '../state/product.state';
import { ProductActions, EProductActions } from '../actions/product.actions';

export const productReducer = (
  state: IProductState = initialProductSate,
  action: ProductActions,
): IProductState => {
  switch (action.type) {
    case EProductActions.GetProductsSuccess: {
      return { ...state, products: action.payload, error: null };
    }
    default:
      return state;
  }
};
