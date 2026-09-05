import ProductCard from "./ProductCard";
import { Product } from "../types/product";

type ProductGridProps = {
    products: Product[];
};

export default function ProductGrid({
    products,
}: ProductGridProps) {
    if (products.length === 0) {
        return (
            <div className="flex-1 min-w-0">
                <div className="bg-white rounded-2xl p-10 text-center">
                    <h2 className="text-2xl font-bold text-slate-800">
                        No encontramos productos
                    </h2>

                    <p className="mt-3 text-slate-500">
                        Intenta cambiar los filtros o realizar otra búsqueda.
                    </p>
                </div>
            </div>
        );
    }

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