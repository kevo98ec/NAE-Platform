"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import SearchBar from "./SearchBar";

export default function Navbar() {
    const router = useRouter();

    const handleSearch = (search: string) => {
        const normalizedSearch = search.trim();

        if (!normalizedSearch) {
            router.push("/catalogo");
            return;
        }

        router.push(
            `/catalogo?search=${encodeURIComponent(normalizedSearch)}`
        );
    };

    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-6">

                <Link
                    href="/"
                    className="text-2xl font-bold text-slate-900"
                >
                    🌊 Lake Store
                </Link>

                <SearchBar onSearch={handleSearch} />

                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-sm font-medium text-slate-600 hover:text-blue-600"
                    >
                        Inicio
                    </Link>

                    <Link
                        href="/catalogo"
                        className="text-sm font-medium text-slate-600 hover:text-blue-600"
                    >
                        Catálogo
                    </Link>
                </div>

            </div>
        </nav>
    );
}