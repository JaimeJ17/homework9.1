export interface Cart {
  id?: string;
  user_id?: string;
  items?: [
    {
      id: string;
      product_variant_id: string;
      quantity: string;
    }?
  ];
}
