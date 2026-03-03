"use client";

import Sidebar from "@/components/Sidebar";
import { useTheme } from "@/lib/theme";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { dark, toggle: toggleDark } = useTheme();

    return (
        <div className="flex min-h-screen bg-bg">
            <Sidebar dark={dark} toggleDark={toggleDark} />
            {children}
        </div>
    );
}
