import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SoaresDev",
    description:
        "I am software engineer, almost 10 years of experience specializing in front-end, back-end, and mobile development, expertise with tecnologies such as JavaScript, TypeScript, React.js, React Native, Node.js, Redux, Unit tests, E2E tests, AWS, SQL and No-SQL and many others."
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <title>{`${metadata.title}`}</title>
                <meta name="theme-color" content="#1d1b27" />
                <meta name="description" content={`${metadata.description}`} />
                <link rel="shortcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
