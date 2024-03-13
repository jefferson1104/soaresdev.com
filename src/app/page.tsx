// COMPONENTS
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";

// HOME PAGE
export default function Home() {
    /* Renders */
    return (
        <main className="flex flex-col min-h-screen bg-[#121212]">
            <Navbar />
            <div className="container mt-24 mx-auto py-4 px-12">
                <Hero />
                <About />
                <Projects />
                <Contacts />
            </div>
        </main>
    );
}
