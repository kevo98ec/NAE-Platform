import ProductCard from './ProductCard';

type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
  size: string;
  status: string;
};

type ProductGridProps ={

    products: Product[];
}



export default function ProductGrid({products,}: ProductGridProps) {
    console.log("Products:", products);
    return (
    <section className="container mx-auto py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
                🔥 Nuevos Lanzamiento
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
            Los modelos más recientes disponibles en Lake Store.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {products.map((product) => (

                <ProductCard
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    size={product.size}
                    status={product.status}
                />
            ))}
         </div>

    </section>
    );
}
    
