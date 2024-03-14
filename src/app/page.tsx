import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// COMPONENTS
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contacts } from "./components/sections/Contacts";
import { Footer } from "./components/Footer";

// HOME PAGE
export default function Home() {
    /* Renders */
    return (
        <main className="flex flex-col min-h-screen bg-[#1d1b27]">
            <Navbar />
            <div className="container mt-24 mx-auto py-4 px-12">
                <Hero />
                <About />
                <Projects />
                <Contacts />
            </div>
            <Footer />

            {/* Toast Notification */}
            <div className="z-30">
                <ToastContainer />
            </div>
        </main>
    );
}
