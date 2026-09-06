import { Product } from "../types/product";
import { storeConfig } from "../config/store";

type WhatsAppButtonProps = {
    product: Product;
};

export default function WhatsAppButton({
    product,
}: WhatsAppButtonProps) {
    const message = `Hola, estoy interesado en ${product.name}. Precio: $${product.price.toFixed(2)}. Talla: ${product.size}`;

    const whatsappUrl = `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 text-white text-center font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
        >
            💬 Comprar por WhatsApp
        </a>
    );
}