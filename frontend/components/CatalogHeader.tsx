type CatalogHeaderProps = {
    productCount: number;
    selectedSort: "newest" | "price-asc" | "price-desc";
    onSortChange: (
        sort: "newest" | "price-asc" | "price-desc"
    ) => void;
};

export default function CatalogHeader({
    productCount,
    selectedSort,
    onSortChange,
}: CatalogHeaderProps) {
    return (
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
                <h1 className="text-4xl font-bold text-slate-900">
                    Catálogo
                </h1>

                <p className="text-slate-500 mt-2">
                    {productCount} productos encontrados
                </p>
            </div>

            <div className="flex items-center gap-3">
                <label
                    htmlFor="sort-products"
                    className="text-sm font-medium text-slate-600"
                >
                    Ordenar por:
                </label>

                <select
                    id="sort-products"
                    value={selectedSort}
                    onChange={(event) =>
                        onSortChange(
                            event.target.value as
                                | "newest"
                                | "price-asc"
                                | "price-desc"
                        )
                    }
                    className="bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm font-medium shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="newest">
                        Más recientes
                    </option>

                    <option value="price-asc">
                        Precio: menor a mayor
                    </option>

                    <option value="price-desc">
                        Precio: mayor a menor
                    </option>
                </select>
            </div>
        </div>
    );
}