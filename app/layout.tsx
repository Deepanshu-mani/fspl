import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
    display: "swap",
});

export const metadata: Metadata = {
    title: "aps - Cybersecurity",
    description: "Expert level Cybersecurity in hours not weeks.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
            <body>{children}</body>
        </html>
    );
}
