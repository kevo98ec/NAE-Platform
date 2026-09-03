import FilterGroup from "./FilterGroup";

import { PRODUCT_CATEGORIES } from "../constants/productCategories";
import { BRANDS } from "../constants/brands";
import { SIZES } from "../constants/sizes";
import { STATUS } from "../constants/status";

type FilterSidebarProps = {
    selectedBrand: string | null;
    onBrandChange: (brand: string | null) => void;

    selectedCategory: string | null;
    onCategoryChange: (category: string | null) => void;
    
    selectedStatus: string | null;
    onStatusChange: (status: string | null) => void;

    onClearFilters: () => void;

    selectedSizes: string[];
    onSizeChange: (size: string) => void;
};

export default function FilterSidebar({
    selectedBrand,
    onBrandChange,
    selectedCategory,
    onCategoryChange,
    selectedStatus,
    onStatusChange,
    onClearFilters,
    selectedSizes,
    onSizeChange,
}: FilterSidebarProps) {

    return (
        <aside className="w-64 shrink-0 bg-white p-4">

            <h2>Filtros</h2>
            <button
                type="button"
                onClick={onClearFilters}
            >
                🧹 Limpiar filtros
            </button>

            <FilterGroup
                title="Categoría"
                items={Object.values(PRODUCT_CATEGORIES)}
                type="button"
                selected={selectedCategory}
                onSelect={(category) => {
                    if (selectedCategory === category) {
                        onCategoryChange(null);
                    } else {
                        onCategoryChange(category);
                    }
                }}
            />

            <FilterGroup
                title="Marca"
                items={BRANDS}
                type="button"
                selected={selectedBrand}
                onSelect={(brand) => {
                    if (selectedBrand === brand) {
                        onBrandChange(null);
                    } else {
                        onBrandChange(brand);
                    }
                }}
            />

            <FilterGroup
                title="Disponibilidad"
                items={STATUS}
                type="button"
                selected={selectedStatus}
               onSelect={(status) => {
                    if (selectedStatus === status) {
                        onStatusChange(null);
                    } else {
                        onStatusChange(status);
                    }
                }}
            />

            <FilterGroup
                title="Talla"
                items={SIZES}
                type="checkbox"
                selected={selectedSizes}
                onSelect={onSizeChange}
            />

        </aside>
    );
}