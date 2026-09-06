import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import { Product } from "../types/product";

type ProductCardProps = {
    product: Product;
};


export default function ProductCard({
    product,
}: ProductCardProps) {
    return (
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <Link href={`/catalogo/${product.id}`}>
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-64 object-contain p-6"
                />

                <div className="p-5">
                    <p
                        className={
                            product.status === "En Stock"
                                ? "text-green-600 font-semibold"
                                : product.status === "Agotado"
                                    ? "text-red-600 font-semibold"
                                    : "text-yellow-600 font-semibold"
                        }
                    >
                        {product.status === "En Stock"
                            ? "🟢 En Stock"
                            : product.status === "Agotado"
                                ? "🔴 Agotado"
                                : "🟡 Bajo pedido"}
                    </p>

                    <h2 className="text-xl font-bold">
                        {product.name}
                    </h2>

                    <p className="mt-2 text-2xl font-bold text-blue-600">
                        ${product.price.toFixed(2)}
                    </p>

                    <p className="mt-1 text-gray-500">
                        US: {product.size}
                    </p>
                </div>
            </Link>

            <div className="px-5 pb-5">
                <PrimaryButton text="Comprar por WhatsApp" />
            </div>
        </article>
    );
}