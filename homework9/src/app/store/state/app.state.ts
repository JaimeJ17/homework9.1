import { LoginState } from './../reducers/my-Login.reducer';
import { CartState } from './../reducers/my-Cart.reducer';
import { ProductState } from './../reducers/my-Product.reducer';
import { CategoryState } from './../reducers/my-Category.reducer';
import { IProductState, initialProductSate } from './product.state';

export interface IAppState {
  myStore: IProductState;
  category?: CategoryState;
  product?: ProductState;
  cart?: CartState;
  login?: LoginState;

}

export const initialAppState: IAppState = {
  myStore: initialProductSate,
};


export const getInitialAppState = (): IAppState => initialAppState;
