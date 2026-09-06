
import ProductGallery from "../../../components/ProductGallery";
import { getProductById } from "../../../services/productService";
import ProductInfo from "../../../components/ProductInfo";
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
            <main className="min-h-screen bg-slate-100 p-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold">
                        Producto no encontrado
                    </h1>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-100">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <ProductGallery
                        images={product.images}
                        video={product.video}
                    />

                    <ProductInfo
                        product={product}
                    />
                </div>
            </div>
        </main>
    );
}