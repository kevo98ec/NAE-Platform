"use client";

import { useRouter, useSearchParams } from "next/navigation";

import Navbar from "../../components/Navbar";
import CatalogHeader from "../../components/CatalogHeader";
import FilterSidebar from "../../components/FilterSidebar";
import ProductGrid from "../../components/ProductGrid";

import {
    getAllProducts,
    getFilteredProducts,
    getSortedProducts,
    searchProductsByName,
} from "../../services/productService";

import { useCatalogFilters } from "../../hooks/useCatalogFilters";

const products = getAllProducts();

export default function CatalogPage() {
   
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get("search") ?? "";
    

    const {
        selectedBrand,
        setSelectedBrand,
        selectedCategory,
        setSelectedCategory,
        selectedStatus,
        setSelectedStatus,
        selectedSizes,
        handleSizeChange,
        selectedSort,
        setSelectedSort,
        clearFilters,
    } = useCatalogFilters();

    const searchedProducts = searchProductsByName(search);

    const filteredProducts = getFilteredProducts(
        searchedProducts,
        {
            brand: selectedBrand ?? undefined,
            category: selectedCategory ?? undefined,
            status: selectedStatus ?? undefined,
            sizes: selectedSizes,
        }
    );

    const sortedProducts = getSortedProducts(
        filteredProducts,
        selectedSort
    );

    const handleClearFilters = () => {
    clearFilters();
    router.replace("/catalogo");
};

    return (
        <main className="min-h-screen bg-slate-100">
            <Navbar />

            <div className="container mx-auto px-6 mt-10">

                <CatalogHeader
                    productCount={sortedProducts.length}
                    selectedSort={selectedSort}
                    onSortChange={setSelectedSort}
                />

                <div className="flex flex-col lg:flex-row gap-8">

                    <FilterSidebar
                        selectedBrand={selectedBrand}
                        onBrandChange={setSelectedBrand}

                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}

                        selectedStatus={selectedStatus}
                        onStatusChange={setSelectedStatus}

                        selectedSizes={selectedSizes}
                        onSizeChange={handleSizeChange}

                        onClearFilters={handleClearFilters}
                    />

                    <ProductGrid
                        products={sortedProducts}
                    />

                </div>
            </div>
        </main>
    );
}