import { CartActions } from './../actions/cart.action';
import { CartItems } from './../../modules/shared/interfaces/cart-items.interface';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { ECartActions } from '../actions/cart.action';


export const cartAdapter = createEntityAdapter<CartItems>();
export interface CartState extends EntityState<CartItems> {
  total: number;
}

const defualtCart = {
  ids: [],
  entities: {
  },
  total: 0
};

export const initialCartState: CartState =  cartAdapter.getInitialState(defualtCart);


export function cartReducer(state: CartState = initialCartState, action: CartActions): CartState {
  switch (action.type) {
    case ECartActions.AddCart: {
      return cartAdapter.addOne(action.payload, state);
    }
    case ECartActions.RemoveFromCart: {
      return cartAdapter.removeOne(action.payload, state);
    }
    case ECartActions.AddTotal: {
      return {...state, total: state.total + action.payload};
    }

    case ECartActions.RemoveTotal: {
      return {...state, total: state.total - action.payload};
    }

    case ECartActions.ModifyCart: {
      return cartAdapter.updateOne({id: action.payload.id, changes: action.payload}, state);
    }

    case ECartActions.ResetTotal: {
      return {...state, total: 0};
    }

    case ECartActions.SaveCartSuccess: {
      return {...state};
    }

    case ECartActions.CleanCart: {
      return cartAdapter.removeAll(state);
    }

    default: {
      return {... state};
    }
  }
}

export const getCartState = createFeatureSelector<CartState>('cart');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = cartAdapter.getSelectors(getCartState);
