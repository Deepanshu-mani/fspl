"use client";

import Sidebar from "@/components/Sidebar";
import { ToastProvider } from "@/components/Toast";
import { useTheme } from "@/lib/theme";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const { dark, toggle } = useTheme();

    return (
        <ToastProvider>
            <div className="flex h-screen bg-bg overflow-hidden">
                <Sidebar dark={dark} toggleDark={toggle} />
                {children}
            </div>
        </ToastProvider>
    );
}
