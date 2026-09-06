{/*Lista de productos (por ahora escrita a mano)*/}
import { PRODUCT_CATEGORIES } from "../constants/productCategories";
import type { Product } from "../types/product";

const products: Product[] = [
  {
    id: 1,
    images: [
      
      "/mercurial.jpg",
      "/mercurial22.jpg",
      "/mercurial33.jpg",
    ],
    video: "/mercurialvideo.mp4",
    name: "Nike Mercurial Vapor 16 Elite FG",
    category: PRODUCT_CATEGORIES.FOOTBALL,
    brand: "Nike",
    isNew: true,
    featured: false,
    price: 200,
    size: "US 7",
    status: "Agotado",
    description:
      "Botines de fútbol de alto rendimiento diseñados para jugadores que buscan velocidad, precisión y máximo control del balón.",

      specifications: [
          {
              label: "Superficie",
              value: "FG",
          },
          {
              label: "Marca",
              value: "Nike",
          },
          {
              label: "Colección",
              value: "Mercurial",
          },
      ],
  },

  {
    id: 2,
    images: ["/predator.jpg"],
    name: "Adidas Predator Elite",
    category: PRODUCT_CATEGORIES.FOOTBALL,
    brand: "Adidas",
    isNew: true,
    featured: false,
    price: 210,
    size: "US 8",
    status: "Agotado",
  },
    {
    id: 3,
    images: ["/mercurial2.jpg"],
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
    images: ["/predator2.jpg"],
    name: "copa Elite",
    category:PRODUCT_CATEGORIES.FOOTBALL,
    brand: "Adidas",
    isNew: true,
    featured: false,
    price: 230,
    size: "US 8",
    status: "Bajo Pedido",
  },
    {
    id: 5,
    images: ["/mercurial3.jpg"],
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
    images: ["/predator4.jpg"],
    name: "predator Elite",
    category:PRODUCT_CATEGORIES.SNEAKERS,
    brand: "Adidas",
    isNew: true,
    featured: true,
    price: 350,
    size: "US 8",
    status: "Bajo Pedido",
  },
      {
    id: 7,
    images: ["/mercurial3.jpg"],
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
    images: ["/predator4.jpg"],
    name: "predator Elite",
    category:PRODUCT_CATEGORIES.SNEAKERS,
    brand: "Adidas",
    isNew: false,
    featured: true,
    price: 385,
    size: "US 8",
    status: "Bajo Pedido",
  },
      {
    id: 9,
    images: ["/mercurial3.jpg"],
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
    images: ["/predator4.jpg"],
    name: "predator Elite",
    category:PRODUCT_CATEGORIES.SNEAKERS,
    brand: "Adidas",
    isNew: false,
    featured: true,
    price: 250,
    size: "US 8",
    status: "Bajo Pedido",
  },
];

export default products;