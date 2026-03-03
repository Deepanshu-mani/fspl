"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { TEAL } from "@/lib/theme";
import {
    Grid2x2Plus, ClipboardCheck, CardSim, CalendarDays, Bell, Settings, CircleHelp,
    ChevronRight, Sun, Moon, Menu, X, LucideIcon
} from "lucide-react";

interface SidebarProps {
    dark: boolean;
    toggleDark: () => void;
}

const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/dashboard", icon: Grid2x2Plus },
    { id: "projects", label: "Projects", path: "", icon: ClipboardCheck },
    { id: "scans", label: "Scans", path: "/scan", icon: CardSim },
    { id: "schedule", label: "Schedule", path: "", icon: CalendarDays },
];

const bottomItems = [
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "support", label: "Support", icon: CircleHelp },
];

function NavDot({ position = "bottom-left" }: { position?: string }) {
    const cls = position === "bottom-left" ? "-bottom-0.5 -left-0.5" : "-top-0.5 -right-0.5";
    return <div className={`absolute ${cls} w-2 h-2 rounded-full bg-orange-500 border border-sidebar`} />;
}

function NavButton({ icon: Icon, label, active, dot, onClick }: {
    icon: LucideIcon; label: string; active?: boolean; dot?: boolean; onClick?: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-full border-none cursor-pointer text-left w-full text-[13px] transition-all font-sans ${active ? "bg-teal/20 text-teal font-medium" : "bg-transparent text-text-muted hover:bg-surface-2 font-normal"
                }`}
        >
            <div className="relative">
                <Icon size={16} color={active ? TEAL : "currentColor"} strokeWidth={2} />
                {dot && <NavDot />}
            </div>
            {label}
        </button>
    );
}

export default function Sidebar({ dark, toggleDark }: SidebarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const isActive = (item: typeof navItems[0]) =>
        pathname === item.path || (pathname === "/scan" && item.id === "scans");

    const sidebar = (
        <>
            {/* Logo */}
            <div className="px-5 pt-5 pb-3 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-teal flex items-center justify-center shadow-[0_0_12px_rgba(12,200,168,0.33)]">
                    <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="font-bold text-lg text-teal tracking-tight">aps</span>
                <button
                    onClick={toggleDark}
                    className="ml-auto w-7 h-7 flex items-center justify-center rounded-lg border border-border bg-transparent cursor-pointer text-text-muted hover:text-text hover:bg-surface-2 transition-colors"
                    aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {dark ? <Sun size={15} /> : <Moon size={15} />}
                </button>
            </div>

            {/* Main nav */}
            <nav className="px-3 py-2 flex-1 flex flex-col gap-0.5">
                {navItems.map((item) => (
                    <NavButton
                        key={item.id}
                        icon={item.icon}
                        label={item.label}
                        active={isActive(item)}
                        dot={item.id === "scans"}
                        onClick={() => {
                            if (item.path) router.push(item.path);
                            setOpen(false);
                        }}
                    />
                ))}

                <div className="h-px bg-border my-2" />

                {bottomItems.map((item) => (
                    <NavButton
                        key={item.id}
                        icon={item.icon}
                        label={item.label}
                        dot={item.id === "notifications"}
                        onClick={() => setOpen(false)}
                    />
                ))}
            </nav>

            {/* User */}
            <div className="p-3 mx-2 mb-2 rounded-xl hover:bg-surface-2 cursor-pointer flex items-center gap-2.5 transition-colors">
                <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center bg-linear-to-br from-teal to-[#0a7a6a] text-white text-[13px] font-semibold shadow-[0_0_8px_rgba(12,200,168,0.25)]">
                    A
                </div>
                <div className="flex-1 min-w-0">
                    <div className="text-xs text-text font-medium truncate">admin@edu.com</div>
                    <div className="text-[11px] text-text-muted">Security Lead</div>
                </div>
                <ChevronRight size={13} color="#666" />
            </div>
        </>
    );

    return (
        <>
            {/* Mobile hamburger */}
            <button
                onClick={() => setOpen(true)}
                className="md:hidden fixed top-3 left-3 z-50 p-2 rounded-lg bg-surface border border-border cursor-pointer text-text"
                aria-label="Open menu"
            >
                <Menu size={20} />
            </button>

            {/* Mobile overlay */}
            {open && (
                <div className="md:hidden fixed inset-0 z-40 flex">
                    <div className="w-[220px] h-full bg-sidebar border-r border-border flex flex-col shadow-2xl">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3 p-1 rounded bg-transparent border-none cursor-pointer text-text-muted"
                            aria-label="Close menu"
                        >
                            <X size={18} />
                        </button>
                        {sidebar}
                    </div>
                    <div className="flex-1 bg-black/40" onClick={() => setOpen(false)} />
                </div>
            )}

            {/* Desktop sidebar */}
            <div className="hidden md:flex w-[200px] h-screen bg-sidebar border-r border-border flex-col shrink-0 sticky top-0">
                {sidebar}
            </div>
        </>
    );
}
