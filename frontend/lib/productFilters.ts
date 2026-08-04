import {Product} from "../types/product"
import { PRODUCT_CATEGORIES } from "../constants/productCategories";

export function getNewProducts (products:Product[]){
    return products.filter(
        (product)=> product.isNew

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