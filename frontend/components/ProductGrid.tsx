

import ProductCard from "./ProductCard";
import { Product } from "../types/product"; 

type ProductGridProps = {
    products: Product[];
};

export default function ProductGrid({
     products,
}: ProductGridProps) {

    return (
       <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (

                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
            
        </div>
    );
}