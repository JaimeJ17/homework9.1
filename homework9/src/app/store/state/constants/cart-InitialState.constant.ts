import { Cart } from '../../../modules/shared/interfaces/cart.interface';

export const cartInitialState: Cart = {
  id: null,
  user_id: null,
  number: null,
  status: null,
  total: 0,
  total_items: null,
  completed_at: null,
  created_at: null,
  items: []
};
