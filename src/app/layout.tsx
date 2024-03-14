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
        <html lang="en" className="scroll-smooth">
            <head>
                <title>SoaresDev</title>
                <meta name="theme-color" content="#1d1b27" />
                <link rel="shortcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
                <link
                    rel="icon"
                    href="/images/icon-192.png"
                    type="image/png"
                    sizes="32x32"
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
