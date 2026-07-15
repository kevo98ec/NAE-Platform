
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";

{/*Lista de productos (por ahora escrita a mano)*/}
const products = [
  {
    id: 1,
    image: "/mercurial.jpg",
    name: "Nike Mercurial Vapor 16 Elite FG",
    price: 235,
    size: "US 9",
    status: "En Stock",
  },

  {
    id: 2,
    image: "/predator.jpg",
    name: "Adidas Predator Elite",
    price: 250,
    size: "US 8",
    status: "Bajo pedido",
  },
    {
    id: 3,
    image: "/mercurial2.jpg",
    name: "tiempo Elite FG",
    price: 235,
    size: "US 9",
    status: "En Stock",
  },

  {
    id: 4,
    image: "/predator2.jpg",
    name: "copa Elite",
    price: 250,
    size: "US 8",
    status: "Bajo pedido",
  },
    {
    id: 5,
    image: "/mercurial3.jpg",
    name: "predator Elite FG",
    price: 235,
    size: "US 9",
    status: "En Stock",

  },

  {
    id: 6,
    image: "/predator4.jpg",
    name: "phantom",
    price: 250,
    size: "US 8",
    status: "Bajo pedido",
  },
];



export default function Home(){

  return(

    <main className="min-h-screen bg-slate-100">
      <Navbar/>
      <Hero/>
      <ProductGrid products={products} />
      

    </main>
  )
}
