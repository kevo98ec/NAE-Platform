import products from "../data/products";

import {
    getNewProducts,
    getProductsByCategory,
    getProductsByBrand,
    filterProducts,
} from "../lib/productFilters";

import { PRODUCT_CATEGORIES } from "../constants/productCategories";

export function getAllProducts() {

    return products;

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

export function getProductsByCategoryFilter(category: string) {

    return getProductsByCategory(products, category);

}

export function getFilteredProducts(filters: {
    brand?: string;
    category?: string;
    status?: string;
    sizes?: string[];
}) {
    return filterProducts(products, filters);
}
