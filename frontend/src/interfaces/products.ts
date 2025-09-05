export interface Product {
  id?: number;
  name: string;
  price: number;
  category: string;
  brand: string;
  inStock: boolean;
}

export interface FormData {
  name: string;
  price: string | number;
  category: string;
  brand: string;
  inStock: boolean;
}



