import { Product } from "../types/product";

type ProductFilterOptions = {
    brand?: string;
    category?: string;
    status?: string;
    sizes?: string[];
};

export function getNewProducts(products: Product[]) {
    return products.filter(
        (product) => product.isNew
    );
}

export function getProductsByCategory(
    products: Product[],
    category: string,
    featured?: boolean
) {
    return products.filter((product) => {

        if (featured !== undefined) {
            return (
                product.category === category &&
                product.featured === featured
            );
        }

        return product.category === category;
    });
}

export function getProductsByBrand(
    products: Product[],
    brand: string
) {
    return products.filter(
        (product) => product.brand === brand
    );
}

export function filterProducts(
    products: Product[],
    filters: ProductFilterOptions
) {
    return products.filter((product) => {

        if (filters.brand && product.brand !== filters.brand) {
            return false;
        }

        if (filters.category && product.category !== filters.category) {
            return false;
        }

        if (filters.status && product.status !== filters.status) {
            return false;
        }

        if (
            filters.sizes &&
            filters.sizes.length > 0 &&
            !filters.sizes.includes(product.size)
        ) {
            return false;
        }

        return true;
    });
}