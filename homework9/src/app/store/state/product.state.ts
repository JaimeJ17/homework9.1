import { Category } from './../../modules/shared/interfaces/category.interface';
import { Product } from './../../modules/shared/interfaces/product.interface';

export interface IProductState {
  products: Product[];
  filterProducts: Product[];
  currentProduct: Product[];
  categories: Category[];
  error: any;
}

export const initialProductSate: IProductState = {
  products: [],
  filterProducts: [],
  error: null,
  categories: [],
  currentProduct: null,
};
