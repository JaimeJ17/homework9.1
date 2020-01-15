export interface Cart {
  id?: string;
  user_id?: string;
  number?: string;
  status?: string;
  total?: string;
  total_items?: string;
  completed_at?: string;
  created_at?: string;
  items?: [
    {
      id: string;
      product_variant_id: string;
      quantity: string;
    }?
  ];
}
