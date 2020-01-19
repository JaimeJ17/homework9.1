import {ActionReducerMap} from '@ngrx/store';
import { productReducer } from './product.reducer';
import { categoryReducer } from './my-Category.reducer';
import { productsReducer } from './my-Product.reducer';
import { cartReducer } from './my-Cart.reducer';
import { loginReducer } from './my-Login.reducer';

export const reducers: ActionReducerMap<any> = {
  myStore: productReducer,
  category: categoryReducer,
  product: productsReducer,
  cart: cartReducer,
  login: loginReducer
};

