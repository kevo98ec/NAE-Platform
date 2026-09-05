"use client";

import { useState } from "react";

type SearchBarProps = {
    onSearch: (search: string) => void;
};

export default function SearchBar({
    onSearch,
}: SearchBarProps) {
    const [search, setSearch] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        onSearch(search);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2"
        >
            <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar productos..."
                className="w-64 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
                Buscar
            </button>
        </form>
    );
}