
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";

import {
    getNewLaunches,
    getFeaturedSneakers,
} from "../services/productService";

const newProducts = getNewLaunches();

const featuredSneakers = getFeaturedSneakers();

export default function Home(){

  return(

    <main className="min-h-screen bg-slate-100">
      <Navbar/>
      <Hero/>
      <ProductSection
          title="🔥 Nuevos Lanzamientos"
          subtitle="Los modelos más recientes disponibles."
          products={newProducts}
      />

      <ProductSection
          title="👟 Sneakers Exclusivos"
          subtitle="Los modelos más buscados para uso diario."
          products={featuredSneakers}
      />
      
    </main>
  )
}
