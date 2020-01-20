import { Action } from '@ngrx/store';
import { CartItems } from '../../modules/shared/interfaces/cart-items.interface';

export enum ECartActions {
  AddCart = '[Cart] Add Cart',
  RemoveFromCart = '[Cart] Remove From Cart',
  AddTotal = '[Cart]  Add Cart Total',
  RemoveTotal = '[Cart] Remove Cart Total',
  ModifyCart = '[Cart] Modify Cart',
  ResetTotal = '[Cart] Reset Total',
  CleanCart = '[Cart] Clean Cart'
}

export class AddCartAction implements Action {
  public readonly type = ECartActions.AddCart;
  constructor(public payload: CartItems) {}
}

export class AddTotalCartAction implements Action {
  public readonly type = ECartActions.AddTotal;
  constructor(public payload: number) {}
}

export class RemoveFromCartAction implements Action {
  public readonly type = ECartActions.RemoveFromCart;
  constructor(public payload: number) {}
}

export class RemoveTotalCartAction implements Action {
  public readonly type = ECartActions.RemoveTotal;
  constructor(public payload: number) {}
}

export class ModifyCartAction implements Action {
  public readonly type = ECartActions.ModifyCart;
  constructor(public payload: CartItems) {}
}

export class CleanCartAction implements Action {
  public readonly type = ECartActions.CleanCart;
}

export class ResetTotalCartAction implements Action {
  public readonly type = ECartActions.ResetTotal;
}

export type CartActions =
  | AddCartAction
  | RemoveFromCartAction
  | AddTotalCartAction
  | ModifyCartAction
  | ResetTotalCartAction
  | CleanCartAction
  | RemoveTotalCartAction;
