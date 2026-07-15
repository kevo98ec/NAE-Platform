/* export default function Hero() {
  return (
    <section>
        <p className="mt-6 text-gray-600 leading-8">
            Encuentra el par que siempre soñaste.
            Productos 100% originales.                             │
            Stock y bajo pedido.                                   │
            Si el modelo existe, nosotros te ayudamos              │
            a conseguirlo.  
        </p>

    </section>
  );
} */

import PrimaryButton from "./PrimaryButton";

export default function Hero() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
        
       { /* izquierda */}
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold text-slate-900">
          LAKE STORE 
          </h1>

          <h2 className="mt-6 text-4xl font-semibold text-blue-600">
          Encuentra el par que siempre soñaste.
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
          Trabajamos únicamente con productos 100% originales.
          Si el modelo que buscas existe, nosotros te ayudamos
          a conseguirlo.
          </p>

          <div className="mt-10 flex gap-4">

            <PrimaryButton text="Explorar catálogo" />

            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-50 transition">
            Buscar un modelo
            </button>

          </div>
          
        </div>

        {/* derecha */}
        <div className="mt-12 md:mt-0">

           <img
            src="/hero-shoe.png"
            alt="Nike Mercurial"
            className="w-[600px]"/>

        </div>  

      </div>

    </section>
  );
} 
