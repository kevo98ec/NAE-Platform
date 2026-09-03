import products from "../data/products";

import {
    getNewProducts,
    getProductsByCategory,
    getProductsByBrand,
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