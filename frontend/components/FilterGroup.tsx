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
        <section>
            <h3>{title}</h3>

            <ul>
                {items.map((item) => (
                    <li key={item}>

                        {type === "button" ? (
                            <button
                                type="button"
                                onClick={() => onSelect(item)}
                            >
                                {item}
                            </button>
                        ) : (
                            <label>
                                <input
                                    type="checkbox"
                                    value={item}
                                    checked={
                                        Array.isArray(selected)
                                            ? selected.includes(item)
                                            : selected === item
                                    }
                                    onChange={() => onSelect(item)}
                                />

                                {item}
                            </label>
                        )}

                    </li>
                ))}
            </ul>
        </section>
    );
}