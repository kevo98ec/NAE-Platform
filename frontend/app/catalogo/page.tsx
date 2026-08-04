import ProductGrid from "../../components/ProductGrid";
import Navbar from "../../components/Navbar";
import {
    getAllProducts,

} from "../../services/productService";
const products = getAllProducts();

export default function CatalogPage(){
    return(
        <main className="min-h-screen bg-slate-100">
            <Navbar/>
            <h1 className="text-4xl font-bold text-center mt-10">
                Catálogo
            </h1>
            <ProductGrid products={products} />
        </main>

    );


}