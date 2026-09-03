"use client";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import FilterSidebar from "../../components/FilterSidebar";
import ProductGrid from "../../components/ProductGrid";

import {
    getAllProducts,
    getFilteredProducts,
} from "../../services/productService";

const products = getAllProducts();

export default function CatalogPage() {
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

        const filteredProducts = getFilteredProducts({
        brand: selectedBrand ?? undefined,
        category: selectedCategory ?? undefined,
        status: selectedStatus ?? undefined,
        sizes: selectedSizes,
    });

const clearFilters = () => {
    setSelectedBrand(null);
    setSelectedCategory(null);
    setSelectedStatus(null);
    setSelectedSizes([]);
};

const handleSizeChange = (size: string) => {
    setSelectedSizes((currentSizes) => {
        if (currentSizes.includes(size)) {
            return currentSizes.filter(
                (currentSize) => currentSize !== size
            );
        }

        return [...currentSizes, size];
    });
};



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
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    selectedStatus={selectedStatus}
                    onStatusChange={setSelectedStatus}
                    selectedSizes={selectedSizes}
                    onSizeChange={handleSizeChange}
                    onClearFilters={clearFilters}
                />

                <ProductGrid
                    products={filteredProducts}
                />
            </div>
        </main>
    );
}