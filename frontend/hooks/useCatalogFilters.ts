
import { useState } from "react";

export type CatalogSort =
    | "newest"
    | "price-asc"
    | "price-desc";

export function useCatalogFilters() {
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [selectedSort, setSelectedSort] =
        useState<CatalogSort>("newest");

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

    return {
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
    };
}