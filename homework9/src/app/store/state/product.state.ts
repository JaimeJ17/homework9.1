import { Product } from './../../modules/shared/interfaces/product.interface';

export interface IProductState {
  products: Product[];
  filterProducts: Product[];
  error: any;
}

export const initialProductSate: IProductState = {
  products: [],
  filterProducts: [],
  error: null,
};
