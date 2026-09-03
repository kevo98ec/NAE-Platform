{/*Lista de productos (por ahora escrita a mano)*/}
import { PRODUCT_CATEGORIES } from "../constants/productCategories";
import type { Product } from "../types/product";

const products: Product[] = [
  {
    id: 1,
    image: "/mercurial.jpg",
    name: "Nike Mercurial Vapor 16 Elite FG",
    category: PRODUCT_CATEGORIES.FOOTBALL,
    brand: "Nike",
    isNew: true,
    featured: false,
    price: 235,
    size: "US 7",
    status: "Agotado",
  },

  {
    id: 2,
    image: "/predator.jpg",
    name: "Adidas Predator Elite",
    category: PRODUCT_CATEGORIES.FOOTBALL,
    brand: "Adidas",
    isNew: true,
    featured: false,
    price: 250,
    size: "US 8",
    status: "Agotado",
  },
    {
    id: 3,
    image: "/mercurial2.jpg",
    name: "tiempo Elite FG",
    category:PRODUCT_CATEGORIES.FOOTBALL,
    brand: "Nike",
    isNew: true,
    featured: false,
    price: 235,
    size: "US 9",
    status: "En Stock",
  },

  {
    id: 4,
    image: "/predator2.jpg",
    name: "copa Elite",
    category:PRODUCT_CATEGORIES.FOOTBALL,
    brand: "Adidas",
    isNew: true,
    featured: false,
    price: 250,
    size: "US 8",
    status: "Bajo pedido",
  },
    {
    id: 5,
    image: "/mercurial3.jpg",
    name: "mercurial Elite FG",
    category:PRODUCT_CATEGORIES.SNEAKERS,
    brand: "Nike",
    isNew: false,
    featured: true,
    price: 235,
    size: "US 9",
    status: "En Stock",

  },

  { 
    id: 6,
    image: "/predator4.jpg",
    name: "predator Elite",
    category:PRODUCT_CATEGORIES.SNEAKERS,
    brand: "Adidas",
    isNew: true,
    featured: true,
    price: 250,
    size: "US 8",
    status: "Bajo pedido",
  },
      {
    id: 7,
    image: "/mercurial3.jpg",
    name: "mercurial Elite FG",
    category:PRODUCT_CATEGORIES.SNEAKERS,
    brand: "Nike",
    isNew: false,
    featured: true,
    price: 235,
    size: "US 9",
    status: "En Stock",

  },

  { 
    id: 8,
    image: "/predator4.jpg",
    name: "predator Elite",
    category:PRODUCT_CATEGORIES.SNEAKERS,
    brand: "Adidas",
    isNew: false,
    featured: true,
    price: 250,
    size: "US 8",
    status: "Bajo pedido",
  },
      {
    id: 9,
    image: "/mercurial3.jpg",
    name: "mercurial Elite FG",
    category:PRODUCT_CATEGORIES.RUNNING,
    brand: "Nike",
    isNew: false,
    featured: true,
    price: 235,
    size: "US 9",
    status: "En Stock",


  },

  { 
    id: 10,
    image: "/predator4.jpg",
    name: "predator Elite",
    category:PRODUCT_CATEGORIES.SNEAKERS,
    brand: "Adidas",
    isNew: false,
    featured: true,
    price: 250,
    size: "US 8",
    status: "Bajo pedido",
  },
];

export default products;