import FilterGroup from "./FilterGroup";

import { PRODUCT_CATEGORIES } from "../constants/productCategories";
import { BRANDS } from "../constants/brands";
import { SIZES } from "../constants/sizes";
import { STATUS } from "../constants/status";

type FilterSidebarProps = {
    selectedBrand: string | null;
    onBrandChange: (brand: string) => void;
};

export default function FilterSidebar({
    selectedBrand,
    onBrandChange,
}: FilterSidebarProps) {

    return (
        <aside  className="w-64 shrink-0 bg-white p-4">

            <h2>Filtros</h2>

            <FilterGroup
                title="Categoría"
                items={Object.values(PRODUCT_CATEGORIES)}
                type="button"
                selected={null}
                onSelect={() => {}}
            />

            <FilterGroup
                title="Marca"
                items={BRANDS}
                type="button"
                selected={selectedBrand}
                onSelect={onBrandChange}
            />

            <FilterGroup
                title="Disponibilidad"
                items={STATUS}
                type="button"
                selected={null}
                onSelect={() => {}}
            />

            <FilterGroup
                title="Talla"
                items={SIZES}
                type="checkbox"
                selected={null}
                onSelect={() => {}}
            />

        </aside>
    );
}