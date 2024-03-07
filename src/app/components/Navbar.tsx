"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

// COMPONENTS
import { NavLink } from "./NavLink";
import { MenuOverlay } from "./MenuOverlay";

// NAVBAR COMPONENT
export const Navbar = () => {
    /* States */
    const [navbarOpen, setNavbarOpen] = useState(false);

    /* Utils */
    const links = [
        { title: "About", href: "#about" },
        { title: "Contact", href: "#contact" },
        { title: "Projects", href: "#projects" }
    ];

    /* Renders */
    return (
        <nav className="fixed mx-auto border-b-1 border-[#33353F] border-b top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link
                    className="text-2xl md:text-5xl text-white font-semibold"
                    href={"/"}
                >
                    <Image
                        src="/images/logo.svg"
                        alt="Soares Dev"
                        width={150}
                        height={50}
                    />
                </Link>

                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            onClick={() => setNavbarOpen(true)}
                        >
                            <Menu />
                        </button>
                    ) : (
                        <button
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            onClick={() => setNavbarOpen(false)}
                        >
                            <X />
                        </button>
                    )}
                </div>

                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex mt-0 p-4 md:p-0 md:flex-row md:space-x-8">
                        {links.map((link, index) => (
                            <li key={index}>
                                <NavLink title={link.title} href={link.href} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {navbarOpen ? <MenuOverlay links={links} /> : null}
        </nav>
    );
};
