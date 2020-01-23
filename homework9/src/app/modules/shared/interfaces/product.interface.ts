export interface Product {
  id?: number;
  slug?: string;
  name?: string;
  description?: string;
  active?: string;
  likes_count?: number;
  likes_up_count?: number;
  likes_down_count?: number;
  published_at?: string;

  master?: {
    id?: string;
    sku?: string;
    price?: string;
    promotional_price?: string;
    stock?: number;
    weight?: string;
    height?: string;
    width?: string;
    depth?: string;
    is_master?: string;
    position?: string;
  };

  category?: {
    id: string;
    slug: string;
    name: string;
  };
  image?: {
    id?: string;
    url: string;
  };
}
