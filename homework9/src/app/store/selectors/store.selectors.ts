import { ErrorState } from './../reducers/my-Error.reducer';
import { CartState } from './../reducers/my-Cart.reducer';
import { ProductState } from './../reducers/my-Product.reducer';
import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IProductState } from '../state/product.state';

export const getProductSate = (state: IAppState) => state.myStore;
export const getProducsState = (state: IAppState) => state.product;
export const getCartState = (state: IAppState) => state.cart;
export const getLoginState = (state: IAppState) => state.login;
export const getErrorState = (state: IAppState) => state.error;


export const getProducts = createSelector(
  getProductSate,
  (state: IProductState) => state.products,
);

export const getError = createSelector(
  getErrorState,
  (state: ErrorState) => state.error.errors,
);

export const getProduct = createSelector(getProducsState, (state: ProductState) => state.currentProduct,
);

export const getFilterProducts = createSelector(getProducsState, (state: ProductState) => {
  let productList = Object.values(state.entities);
  productList = productList.filter(product =>
    state.categoryFilter ? product.category.name === state.categoryFilter : product
  );
  productList = productList.filter(product =>
    state.searchQuery ? product.name.includes(state.searchQuery) : product
  );
  return productList;
});

export const getCategories = createSelector(
  getProductSate,
  (state: IProductState) => state.categories,
);

export const getCartLenght = createSelector(
  getCartState,
  (state: CartState) => state.ids.length,
);

export const getLoginToken = createSelector(
  getLoginState,
  (state: IProductState) => !!state.login.token,
);

export const getUser = createSelector(
  getLoginState,
  (state: IProductState) => state.login.user,
);

export const getCartItems = createSelector(
  getProductSate,
  (state: IProductState) => state.cart.items,
);

export const getCartTotal = createSelector(
  getCartState,
  (state: CartState) => state.total,
);


export const getEmail = createSelector(
  getLoginState,
  (state: IProductState) => state.login.user.email,
);
