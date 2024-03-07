import { Hero } from "./components/Hero";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen bg-[#121212]">
            <div className="container mx-auto py-4 px-12">
                <Hero />
            </div>
        </main>
    );
}
