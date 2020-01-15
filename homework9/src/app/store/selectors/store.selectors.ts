import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IProductState } from '../state/product.state';

export const getProductSate = (state: IAppState) => state.products;

export const getProducts = createSelector(
  getProductSate,
  (state: IProductState) => state.products,
);

export const getCategories = createSelector(
  getProductSate,
  (state: IProductState) => state.categories,
);

export const getCartLenght = createSelector(
  getProductSate,
  (state: IProductState) => state.cart.items.length,
);

export const getLoginToken = createSelector(
  getProductSate,
  (state: IProductState) => !!state.login.token,
);

export const getUser = createSelector(
  getProductSate,
  (state: IProductState) => state.login.user,
);

export const getCartItems = createSelector(
  getProductSate,
  (state: IProductState) => state.cart.items,
);
