import {ProductCategory} from "../constants/productCategories";

export type Product = {
  id: number;
  image: string;
  name: string;
  category: ProductCategory;
  isNew: boolean;
  featured: boolean;
  price: number;
  size: string;
  status: string;
};

  