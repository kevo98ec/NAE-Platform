import products from "../data/products";
import type { Product } from "../types/product";

import {
    getNewProducts,
    getProductsByCategory,
    getProductsByBrand,
    filterProducts,
    sortProducts,
    searchProducts,
    
} from "../lib/productFilters";

import { PRODUCT_CATEGORIES } from "../constants/productCategories";
import type { ProductSort } from "../lib/productFilters";
export function getAllProducts() {

    return products;

}
export function getProductById(id: number) {
    return products.find((product) => product.id === id);
}

export function getNewLaunches() {

    return getNewProducts(products);

}

export function getFeaturedSneakers() {

    return getProductsByCategory(

        products,

        PRODUCT_CATEGORIES.SNEAKERS,

        true

    );

}

export function getProductsByBrandFilter(brand: string) {

    return getProductsByBrand(products, brand);

}

export function searchProductsByName(search: string) {
    return searchProducts(products, search);
}

export function getProductsByCategoryFilter(category: string) {

    return getProductsByCategory(products, category);

}

export function getFilteredProducts(
    productsToFilter: Product[],
    filters: {
        brand?: string;
        category?: string;
        status?: string;
        sizes?: string[];
    }
) {
    return filterProducts(productsToFilter, filters);
}


export function getSortedProducts(
    productsToSort: Product[],
    sort: ProductSort
) {
    return sortProducts(productsToSort, sort);
}

