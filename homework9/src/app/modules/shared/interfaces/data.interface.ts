import { Login } from './login.interface';
import { Product } from './product.interface';
import { Category } from './category.interface';
export interface Data {
  data?: Product[] | Category[];
}
