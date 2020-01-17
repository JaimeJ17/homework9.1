import { Action } from '@ngrx/store';
import { CartItems } from '../../modules/shared/interfaces/cart-items.interface';

export enum ECartActions {
  AddCart = '[Cart] Add Cart',
  RemoveFromCart = '[Cart] Remove From Cart',
}

export class AddCartAction implements Action {
  public readonly type = ECartActions.AddCart;
  constructor(public payload: CartItems) {}
}


export class RemoveFromCartAction implements Action {
  public readonly type = ECartActions.RemoveFromCart;
  constructor(public payload: number) {}
}

export type CartActions =
  | AddCartAction
  | RemoveFromCartAction;
