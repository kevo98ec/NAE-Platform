import { Product } from '../types/product';
import ProductGrid from './ProductGrid';


type ProductSectionProps ={

    title: string;
    subtitle: string;
    products: Product[];
}



export default function ProductSection({
    title,
    subtitle,
    products,
}: ProductSectionProps) {

    
    return (
    <section className="container mx-auto py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
            {title}
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
            {subtitle}
        </p>
        
        <ProductGrid 
            products={products} 
        
        />

    </section>
    );
}
    
