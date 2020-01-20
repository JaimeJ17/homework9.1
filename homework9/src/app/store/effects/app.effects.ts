import { CartEffects } from './cart.effects';
import { CategoriesEffects } from './category.effect';
import { ProductEffects } from './product.effect';
import { LoginEffects } from './login.effect';

export const appEffects = [ProductEffects, CategoriesEffects, LoginEffects, CartEffects];
