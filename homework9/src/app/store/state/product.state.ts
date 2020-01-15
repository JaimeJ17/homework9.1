import { cartInitialState } from './../../modules/shared/constants/cart-InitialState.constant';
import { Cart } from './../../modules/shared/interfaces/cart.interface';
import { Category } from './../../modules/shared/interfaces/category.interface';
import { Product } from './../../modules/shared/interfaces/product.interface';

export interface IProductState {
  products: Product[];
  filterProducts: Product[];
  currentProduct: Product[];
  categories: Category[];
  error: any;
  cart: Cart;
}

export const initialProductSate: IProductState = {
  products: [],
  filterProducts: [],
  error: null,
  categories: [],
  currentProduct: null,
  cart: cartInitialState,
};
