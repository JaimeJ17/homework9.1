import { Action } from '@ngrx/store';

export enum ECartActions {
  AddCart = '[Cart] Add Cart',
  RemoveFromCart = '[Cart] Remove From Cart',
}

export class AddCartAction implements Action {
  public readonly type = ECartActions.AddCart;
  constructor(public payload: any) {}
}


export class RemoveFromCartAction implements Action {
  public readonly type = ECartActions.RemoveFromCart;
  constructor(public payload: number) {}
}

export type CartActions =
  | AddCartAction
  | RemoveFromCartAction;
