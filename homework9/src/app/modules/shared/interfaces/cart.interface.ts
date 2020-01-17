import { CartItems } from './cart-items.interface';
export interface Cart {
  id?: string;
  user_id?: string;
  number?: string;
  status?: string;
  total?: number;
  total_items?: number;
  completed_at?: string;
  created_at?: string;
  items?: CartItems[];
}
