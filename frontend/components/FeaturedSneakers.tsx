
import { Product } from "../types/product";
import ProductCard from "./ProductCard";


type FeaturedSneakersProps = {
    products: Product[];
};



export default function FeaturedSneakers({
    products,
}: FeaturedSneakersProps){

    return(

        <section className="container mx-auto py-20">

            <h2 className="text-4xl font-bold text-center">
                👟 Sneakers Exclusivos
            </h2>
            <p className="text-center text-gray-600 mt-4">
                Los modelos mas buscados para uso diario.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
            {products.map((product) => (
        
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
        </section>
    );

}