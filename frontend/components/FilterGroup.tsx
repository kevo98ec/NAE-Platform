type FilterGroupProps = {
    title: string;
    items: readonly string[];
    type: "button" | "checkbox";
    selected: string | null | readonly string[];
    onSelect: (item: string) => void;
};

export default function FilterGroup({
    title,
    items,
    type,
    selected,
    onSelect,
}: FilterGroupProps) {
    return (
        <section className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800 mb-3">
                {title}
            </h3>

            <ul className="space-y-2">
                {items.map((item) => {
                    const isSelected =
                        Array.isArray(selected)
                            ? selected.includes(item)
                            : selected === item;

                    return (
                        <li key={item}>
                            {type === "button" ? (
                                <button
                                    type="button"
                                    onClick={() => onSelect(item)}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                                        isSelected
                                            ? "bg-blue-600 text-white font-semibold"
                                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                    }`}
                                >
                                    {item}
                                </button>
                            ) : (
                                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-slate-900">
                                    <input
                                        type="checkbox"
                                        value={item}
                                        checked={
                                            Array.isArray(selected)
                                                ? selected.includes(item)
                                                : selected === item
                                        }
                                        onChange={() => onSelect(item)}
                                        className="h-4 w-4 rounded border-slate-300"
                                    />

                                    <span>{item}</span>
                                </label>
                            )}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}