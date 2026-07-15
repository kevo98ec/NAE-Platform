import PrimaryButton from "./PrimaryButton";

type ProductCardProps ={
  image: string;
  name: string;
  price: number;
  size: string;
  status: string;
};

export default function ProductCard({image,name,price,size,status}: ProductCardProps) {

    return(
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-2xl ">
            <img src={image} alt={name} className="w-full h-64 object-contain p-6" />
            <div className="p-5">

           
                <p
                className={
                    status === "En Stock"
                    ? "text-green-600 font-semibold"
                    : "text-yellow-600 font-semibold"
                }
                >             
                {status === "En Stock"
                    ? "🟢 En Stock"
                    : "🟡 Bajo pedido"}
                </p>
                            
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="mt-2 text-2xl font-bold text-blue-600">${price.toFixed(2)}</p>
                <p className="mt-1 text-gray-500">US: {size}</p>
                
                <div className="mt-5">

                    <PrimaryButton text="Comprar por WhatsApp"/> 

                </div>
            </div>                 
        </article>
    );
}

  