import { Product } from "../types/product";
import { storeConfig } from "../config/store";

type ProductInfoProps = {
    product: Product;

};

export default function ProductInfo({
    product,
    
}: ProductInfoProps) {
    return (
        <div>
            <p className="text-sm text-slate-500">
                {product.brand}
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900">
                {product.name}
            </h1>

            <p className="mt-4 text-3xl font-bold text-blue-600">
                ${product.price.toFixed(2)}
            </p>

            <p className="mt-6 text-slate-600">
                Talla: {product.size}
            </p>

            <p className="mt-3 font-semibold">
                {product.status === "En Stock"
                    ? "🟢 En Stock"
                    : product.status === "Agotado"
                        ? "🔴 Agotado"
                        : "🟡 Bajo Pedido"}
            </p>

            <a
                href={`https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(
                    `Hola, estoy interesado en ${product.name}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full bg-blue-600 text-white text-center font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
            >
                💬 Comprar por WhatsApp
            </a>

            {product.description && (
                <div className="mt-8">
                    <h2 className="text-xl font-bold text-slate-900">
                        Descripción
                    </h2>

                    <p className="mt-3 text-slate-600 leading-relaxed">
                        {product.description}
                    </p>
                </div>
            )}
            {product.specifications &&
                product.specifications.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-xl font-bold text-slate-900">
                            Especificaciones
                        </h2>

                        <div className="mt-4 space-y-3">
                            {product.specifications.map((specification) => (
                                <div
                                    key={specification.label}
                                    className="flex justify-between border-b border-slate-200 pb-3"
                                >
                                    <span className="font-medium text-slate-600">
                                        {specification.label}
                                    </span>

                                    <span className="text-slate-900">
                                        {specification.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
        </div>
    );
}