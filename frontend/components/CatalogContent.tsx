"use client";

import { useRouter } from "next/navigation";

import CatalogHeader from "./CatalogHeader";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";

import {
    getAllProducts,
    getFilteredProducts,
    getSortedProducts,
    searchProductsByName,
} from "../services/productService";

import { useCatalogFilters } from "../hooks/useCatalogFilters";

type CatalogContentProps = {
    search: string;
};

export default function CatalogContent({
    search,
}: CatalogContentProps) {
    const router = useRouter();

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

    const products = getAllProducts();

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
        <>
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
        </>
    );
}