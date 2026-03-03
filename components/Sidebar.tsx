"use client";

import { usePathname, useRouter } from "next/navigation";
import Icon from "./Icon";
import { TEAL } from "@/lib/theme";

interface SidebarProps {
    dark: boolean;
    toggleDark: () => void;
}

const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "dashboard", path: "/dashboard" },
    { id: "projects", label: "Projects", icon: "projects", path: "/projects" },
    { id: "scans", label: "Scans", icon: "scans", path: "/scans" },
    { id: "schedule", label: "Schedule", icon: "schedule", path: "/schedule" },
];

const bottomItems = [
    { id: "notifications", label: "Notifications", icon: "notifications" },
    { id: "settings", label: "Settings", icon: "settings" },
    { id: "support", label: "Support", icon: "support" },
];

export default function Sidebar({ dark, toggleDark }: SidebarProps) {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className="w-[220px] min-h-screen bg-sidebar border-r border-border flex flex-col shrink-0 relative z-10">
            {/* Logo */}
            <div className="px-5 pt-5 pb-2 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center shadow-[0_0_12px_rgba(12,200,168,0.33)]">
                    <div className="w-2.5 h-2.5 bg-white rounded-sm rotate-45" />
                </div>
                <span className="font-bold text-[17px] text-text tracking-tight">aps</span>
                <button
                    onClick={toggleDark}
                    className="ml-auto border border-border rounded-md px-2 py-0.5 text-text-muted text-[11px] font-mono cursor-pointer hover:text-text transition-colors bg-transparent"
                >
                    {dark ? "☀" : "☾"}
                </button>
            </div>

            {/* Nav */}
            <nav className="px-3 py-3 flex-1 flex flex-col gap-0.5">
                {navItems.map((item) => {
                    const active =
                        pathname === item.path ||
                        (pathname === "/scan-detail" && item.id === "scans");
                    return (
                        <button
                            key={item.id}
                            onClick={() => router.push(item.path)}
                            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg border-none cursor-pointer text-left w-full text-sm transition-all font-sans ${active
                                ? "bg-sidebar-active text-teal font-semibold"
                                : "bg-transparent text-text-muted hover:bg-surface-2 font-normal"
                                }`}
                        >
                            <Icon name={item.icon} size={16} color={active ? TEAL : undefined} />
                            {item.label}
                        </button>
                    );
                })}
                <div className="h-px bg-border my-2" />
                {bottomItems.map((item) => (
                    <button
                        key={item.id}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg border-none cursor-pointer bg-transparent text-text-muted hover:bg-surface-2 text-left w-full text-sm font-normal transition-all font-sans"
                    >
                        <Icon name={item.icon} size={16} />
                        {item.label}
                    </button>
                ))}
            </nav>

            {/* User profile */}
            <div className="px-4 py-3 border-t border-border flex items-center gap-2.5">
                <img
                    src="https://i.pravatar.cc/36?u=admin-sec-lead"
                    alt="Admin"
                    className="w-[34px] h-[34px] rounded-full object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                    <div className="text-xs text-text font-medium truncate">admin@edu.com</div>
                    <div className="text-[11px] text-text-muted">Security Lead</div>
                </div>
                <Icon name="chevronRight" size={14} />
            </div>
        </div>
    );
}
