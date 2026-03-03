"use client";

import { useState } from "react";
import Icon from "./Icon";
import { RED, ORANGE, YELLOW, GREEN } from "@/lib/theme";

interface ScanTableProps {
    onNavigate: (path: string) => void;
}

const scans = [
    { name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vuln: [5, 12, 23, 18], ago: "4d ago" },
    { name: "Cloud API Gateway", type: "Blackbox", status: "Completed", progress: 100, vuln: [2, 8, 15, 7], ago: "2d ago" },
    { name: "Mobile Backend", type: "Greybox", status: "Completed", progress: 100, vuln: [1, 4, 9, 22], ago: "3d ago" },
    { name: "Payment Service", type: "Whitebox", status: "Completed", progress: 100, vuln: [8, 15, 6, 3], ago: "1d ago" },
    { name: "Auth Microservice", type: "Greybox", status: "Completed", progress: 100, vuln: [3, 7, 11, 14], ago: "5d ago" },
    { name: "CDN Edge Nodes", type: "Blackbox", status: "Completed", progress: 100, vuln: [0, 2, 5, 9], ago: "6d ago" },
    { name: "Staging Database", type: "Greybox", status: "Scheduled", progress: 0, vuln: [0, 0], ago: "—" },
    { name: "IoT Device Fleet", type: "Blackbox", status: "Failed", progress: 34, vuln: [2, 4, 8, 1], ago: "3d ago" },
    { name: "Legacy Admin Panel", type: "Blackbox", status: "Failed", progress: 12, vuln: [6, 9, 3, 1], ago: "7d ago" },
];

const statusStyles: Record<string, { bg: string; text: string; border: string }> = {
    Completed: { bg: "bg-low/10", text: "text-low", border: "border-low/20" },
    Scheduled: { bg: "bg-transparent", text: "text-text-muted", border: "border-border" },
    Failed: { bg: "bg-critical/10", text: "text-critical", border: "border-critical/20" },
};

const vulnColors = [RED, ORANGE, YELLOW, GREEN];

export default function ScanTable({ onNavigate }: ScanTableProps) {
    const [search, setSearch] = useState("");
    const filtered = scans.filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.type.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-surface rounded-xl border border-border shadow-sm flex flex-col overflow-hidden">
            {/* Toolbar */}
            <div className="px-6 py-3 flex gap-3 items-center shrink-0 border-b border-border">
                <div className="flex-1 relative max-w-lg">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted">
                        <Icon name="search" size={15} />
                    </div>
                    <input
                        placeholder="Search scans by name or type..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full py-2 pl-10 pr-4 rounded-md border border-border bg-surface-2 text-text text-[13px] outline-none font-sans focus:ring-1 focus:ring-teal/50 transition-all placeholder:text-text-muted"
                    />
                </div>
                <div className="ml-auto flex items-center gap-2.5">
                    {["Filter", "Column"].map((btn) => (
                        <button
                            key={btn}
                            className="px-4 py-2 rounded-md border border-border bg-transparent text-text text-[13px] cursor-pointer flex items-center gap-2 font-sans hover:bg-surface-2 transition-colors"
                        >
                            <Icon name={btn === "Filter" ? "filter" : "columns"} size={14} />
                            {btn}
                        </button>
                    ))}
                    <button
                        onClick={() => onNavigate("/scan")}
                        className="px-4 py-2 rounded-md border border-teal/20 bg-teal text-white text-[13px] cursor-pointer flex items-center gap-2 font-sans font-medium hover:bg-teal-hover transition-colors shadow-sm"
                    >
                        <Icon name="plus" size={14} color="#fff" />
                        New scan
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto">
                <div className="w-full min-w-[900px]">
                    <div className="grid grid-cols-[2fr_1fr_1fr_2fr_1.5fr_1fr] px-6 py-2.5 border-b border-border">
                        {["Scan Name", "Type", "Status", "Progress", "Vulnerability", "Last Scan"].map((h) => (
                            <span key={h} className="text-xs text-text-muted font-medium">{h}</span>
                        ))}
                    </div>

                    {filtered.map((row, i) => {
                        const style = statusStyles[row.status];
                        return (
                            <div
                                key={i}
                                onClick={() => onNavigate("/scan")}
                                className="grid grid-cols-[2fr_1fr_1fr_2fr_1.5fr_1fr] px-6 py-3 cursor-pointer bg-surface hover:bg-surface-2 transition-colors items-center border-b border-border last:border-b-0"
                            >
                                <span className="text-[13px] font-semibold text-text">{row.name}</span>
                                <span className="text-[13px] text-text-sub">{row.type}</span>
                                <div>
                                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-md ${style.bg} ${style.text} border ${style.border}`}>
                                        {row.status}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-[140px] h-1.5 rounded-full bg-border overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${row.status === "Failed" ? "bg-critical" : "bg-teal"}`}
                                            style={{ width: `${row.progress}%` }}
                                        />
                                    </div>
                                    <span className="text-xs text-text-muted">{row.progress}%</span>
                                </div>
                                <div className="flex gap-1">
                                    {vulnColors.slice(0, row.vuln.length).map((color, j) => (
                                        <span
                                            key={j}
                                            className="w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-bold text-white"
                                            style={{ backgroundColor: color }}
                                        >
                                            {row.vuln[j]}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-xs text-text-muted">{row.ago}</span>
                            </div>
                        );
                    })}
                </div>

                {/* Pagination */}
                <div className="py-3 px-6 flex justify-between items-center border-t border-border">
                    <span className="text-[13px] text-text-muted">Showing {filtered.length} of {scans.length} Scans</span>
                    <div className="flex gap-1.5">
                        <button className="p-1.5 rounded border border-border bg-transparent cursor-pointer text-text-muted hover:bg-surface-2 transition-colors">
                            <Icon name="chevronLeft" size={15} />
                        </button>
                        <button className="p-1.5 rounded border border-border bg-transparent cursor-pointer text-text-muted hover:bg-surface-2 transition-colors">
                            <Icon name="chevronRight" size={15} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
