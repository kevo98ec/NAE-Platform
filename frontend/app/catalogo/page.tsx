import Navbar from "../../components/Navbar";
import CatalogContent from "../../components/CatalogContent";

type CatalogPageProps = {
    searchParams: Promise<{
        search?: string;
    }>;
};

export default async function CatalogPage({
    searchParams,
}: CatalogPageProps) {
    const params = await searchParams;

    const search = params.search ?? "";

    return (
        <main className="min-h-screen bg-slate-100">
            <Navbar />

            <div className="container mx-auto px-6 mt-10">
                <CatalogContent
                    search={search}
                />
            </div>
        </main>
    );
}