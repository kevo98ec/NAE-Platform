"use client";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import FilterSidebar from "../../components/FilterSidebar";
import ProductGrid from "../../components/ProductGrid";

import {
    getAllProducts,
    getProductsByBrandFilter,
} from "../../services/productService";

const products = getAllProducts();

export default function CatalogPage() {

    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const filteredProducts = selectedBrand
    ? getProductsByBrandFilter(selectedBrand)
    : products;

    return (
        <main className="min-h-screen bg-slate-100">

            <Navbar />

            <h1 className="text-4xl font-bold text-center mt-10">
                Catálogo
            </h1>


            <div className="container mx-auto flex gap-8 mt-10">

                <FilterSidebar
                    selectedBrand={selectedBrand}
                    onBrandChange={setSelectedBrand}
                />

                <ProductGrid
                    products={filteredProducts}
                />

            </div>

        </main>
    );
}