import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SoaresDev",
    description:
        "Web developer since 2014, specializing in front-end, back-end, and mobile development, leveraging technologies from the JavaScript ecosystem such as React.js, Node.js, React Native, and more."
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    href="/images/icon.png"
                    type="image/png"
                    sizes="32x32"
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
