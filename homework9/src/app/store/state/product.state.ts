import { Cart } from './../../modules/shared/interfaces/cart.interface';
import { Category } from './../../modules/shared/interfaces/category.interface';
import { Product } from './../../modules/shared/interfaces/product.interface';
import { User } from 'src/app/modules/shared/interfaces/user.interface';
import { cartInitialState } from './constants/cart-InitialState.constant';
import { tokenState } from './constants/token-initialState.constant';
import { userState } from './constants/user-initialState.constant';

export interface IProductState {
  products: Product[];
  filterProducts: Product[];
  currentProduct: Product[];
  categories: Category[];
  error: any;
  cart: Cart;
  token: string;
  user: User;
}

export const initialProductSate: IProductState = {
  products: [],
  filterProducts: [],
  error: null,
  categories: [],
  currentProduct: null,
  cart: cartInitialState,
  token: tokenState,
  user: userState,
};
