"use client";

import { Logo } from "./Logo";

// FOOTER COMPONENT
export const Footer = () => {
    /* Renders */
    return (
        <footer className="footer border-t-2 border-t-[#33353F] text-white flex items-center justify-center z-20">
            <div className="container p-8 flex items-center justify-between gap-12">
                <Logo />
                <p className="text-slate-600 font-semibold text-xs md:text-base ">
                    Developed by Jefferson Soares
                </p>
            </div>
        </footer>
    );
};
