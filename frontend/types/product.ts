import {ProductCategory} from "../constants/productCategories";

export type Product = {
  id: number;
  images: string[];
  video?: string;
  name: string;
  category: ProductCategory;
  brand: string;
  isNew: boolean;
  featured: boolean;
  price: number;
  size: string;
  status: string;
  description?: string;
  
  specifications?: {
    label: string;
    value: string;
  }[];
};

  