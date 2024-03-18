import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SoaresDev - Web Developer",
    applicationName: "SoaresDev - Web Developer",
    referrer: "origin",
    creator: "Jefferson Soares",
    publisher: "Jefferson Soares",
    robots: { index: true, follow: true },
    icons: ["/images/icon-192.png", "/images/icon-512.png"],
    metadataBase: new URL("https://soaresdev.com"),
    description:
        "I am software engineer, almost 10 years of experience specializing in front-end, back-end, and mobile development, expertise with tecnologies such as JavaScript, TypeScript, React.js, React Native, Node.js, Redux, Unit tests, E2E tests, AWS, SQL and No-SQL and many others.",
    alternates: {
        canonical: "https://soaresdev.com"
    },
    appleWebApp: {
        capable: true,
        title: "SoaresDev - Web Developer"
    },
    authors: [
        {
            name: "SoaresDev",
            url: "https://soaresdev.com"
        },
        {
            name: "Jefferson Soares",
            url: "https://github.com/jefferson1104"
        }
    ],
    keywords: [
        "web developer",
        "mobile developer",
        "software engineer",
        "front-end",
        "back-end",
        "JavaScript",
        "TypeScript",
        "react.js",
        "node.js",
        "React Native"
    ],
    openGraph: {
        type: "website",
        url: "https://soaresdev.com",
        title: "SoaresDev - Web Developer",
        description:
            "I am software engineer, almost 10 years of experience specializing in front-end, back-end, and mobile development, expertise with tecnologies such as JavaScript, TypeScript, React.js, React Native, Node.js, Redux, Unit tests, E2E tests, AWS, SQL and No-SQL and many others.",
        siteName: "SoaresDev - Web Developer",
        images: [
            {
                url: "/images/banner.png"
            }
        ]
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#1d1b27" />
                <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-FJNEZYYREQ"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-FJNEZYYREQ');
                    `}
                </Script>
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
