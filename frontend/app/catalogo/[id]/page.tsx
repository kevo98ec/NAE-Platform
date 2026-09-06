import Navbar from "../../../components/Navbar";
import ProductGallery from "../../../components/ProductGallery";
import ProductGrid from "../../../components/ProductGrid";
import ProductInfo from "../../../components/ProductInfo";

import {
    getProductById,
    getRelatedProducts,
} from "../../../services/productService";

type ProductPageProps = {
    params: {
        id: string;
    };
};

export default async function ProductPage({
    params,
}: ProductPageProps) {
    const { id } = await params;

    const productId = Number(id);

    const product = getProductById(productId);

    if (!product) {
        return (
            <main className="min-h-screen bg-slate-100">
                <Navbar />

                <div className="max-w-6xl mx-auto px-6 py-10">
                    <h1 className="text-2xl font-bold">
                        Producto no encontrado
                    </h1>
                </div>
            </main>
        );
    }

    const relatedProducts = getRelatedProducts(productId);

    return (
        <main className="min-h-screen bg-slate-100">
            <Navbar />

            <div className="max-w-6xl mx-auto px-6 py-10">

                {/* Detalle principal del producto */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <ProductGallery
                        images={product.images}
                        video={product.video}
                    />

                    <ProductInfo
                        product={product}
                    />
                </div>

                {/* Productos relacionados */}
                {relatedProducts.length > 0 && (
                    <section className="mt-16">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-slate-900">
                                También te puede interesar
                            </h2>

                            <p className="mt-2 text-slate-500">
                                Otros productos que podrían interesarte.
                            </p>
                        </div>

                        <ProductGrid
                            products={relatedProducts}
                        />
                    </section>
                )}

            </div>
        </main>
    );
}