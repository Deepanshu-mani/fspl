"use client";

import { useState } from "react";
import Icon from "./Icon";
import { TEAL, RED, ORANGE, YELLOW, GREEN } from "@/lib/theme";

interface ScanTableProps {
    onNavigate: (path: string) => void;
}

const scans = [
    { name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vuln: [5, 12, 23, 18], ago: "4d ago" },
    { name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vuln: [5, 12, 23, 18], ago: "4d ago" },
    { name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vuln: [5, 12, 23, 18], ago: "4d ago" },
    { name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vuln: [5, 12, 23, 18], ago: "4d ago" },
    { name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vuln: [5, 12, 23, 18], ago: "4d ago" },
    { name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vuln: [5, 12, 23, 18], ago: "4d ago" },
    { name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vuln: [5, 12, 23, 18], ago: "4d ago" },
    { name: "Web App Servers", type: "Greybox", status: "Scheduled", progress: 100, vuln: [5, 12], ago: "4d ago" },
    { name: "Web App Servers", type: "Greybox", status: "Scheduled", progress: 100, vuln: [5, 12], ago: "4d ago" },
    { name: "IoT Devices", type: "Blackbox", status: "Failed", progress: 10, vuln: [2, 4, 8, 1], ago: "3d ago" },
    { name: "Temp Data", type: "Blackbox", status: "Failed", progress: 10, vuln: [2, 4, 6, 1], ago: "3d ago" },
];

const statusConfig: Record<string, { bg: string; text: string; border: string }> = {
    Completed: { bg: "bg-low/10", text: "text-low", border: "border-low/30" },
    Scheduled: { bg: "bg-gray-400/10", text: "text-text-muted", border: "border-gray-400/30" },
    Failed: { bg: "bg-critical/10", text: "text-critical", border: "border-critical/30" },
};

const vulnColors = [RED, ORANGE, YELLOW, GREEN];

export default function ScanTable({ onNavigate }: ScanTableProps) {
    const [search, setSearch] = useState("");
    const filtered = scans.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            {/* Toolbar */}
            <div className="px-6 py-4 flex gap-2.5 items-center bg-bg shrink-0">
                <div className="flex-1 relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <Icon name="search" size={14} />
                    </div>
                    <input
                        placeholder="Search scans by name or type..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full py-2.5 pl-9 pr-3.5 rounded-lg border border-input-border bg-input-bg text-text text-[13px] outline-none font-sans focus:ring-2 focus:ring-teal/30 transition-all placeholder:text-text-muted"
                    />
                </div>
                {["Filter", "Column"].map((btn) => (
                    <button
                        key={btn}
                        className="px-3.5 py-2 rounded-lg border border-border bg-transparent text-text text-[13px] cursor-pointer flex items-center gap-1.5 font-sans hover:bg-surface transition-colors"
                    >
                        <Icon name={btn === "Filter" ? "filter" : "columns"} size={13} />
                        {btn}
                    </button>
                ))}
                <button
                    onClick={() => onNavigate("/scan-detail")}
                    className="px-4 py-2 rounded-lg border-none bg-teal text-white text-[13px] cursor-pointer flex items-center gap-1.5 font-sans font-medium shadow-[0_4px_12px_rgba(12,200,168,0.27)] hover:bg-teal-hover transition-colors"
                >
                    <Icon name="plus" size={13} color="#fff" />
                    New scan
                </button>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-auto px-6 pb-6">
                <div className="bg-surface rounded-[10px] border border-border overflow-hidden">
                    {/* Table header */}
                    <div className="grid grid-cols-[2fr_1fr_1fr_2fr_1.5fr_1fr] px-5 py-2.5 border-b border-border bg-surface-2">
                        {["Scan Name", "Type", "Status", "Progress", "Vulnerability", "Last Scan"].map((h) => (
                            <span key={h} className="text-xs text-text-muted font-medium">{h}</span>
                        ))}
                    </div>
                    {/* Table rows */}
                    {filtered.map((row, i) => {
                        const sc = statusConfig[row.status];
                        return (
                            <div
                                key={i}
                                onClick={() => onNavigate("/scan-detail")}
                                className="grid grid-cols-[2fr_1fr_1fr_2fr_1.5fr_1fr] px-5 py-3.5 border-b border-border last:border-b-0 cursor-pointer bg-table-row hover:bg-table-row-hover transition-colors"
                            >
                                <span className="text-[13px] font-semibold text-text">{row.name}</span>
                                <span className="text-[13px] text-text-sub">{row.type}</span>
                                <div>
                                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${sc.bg} ${sc.text} border ${sc.border}`}>
                                        {row.status}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <div className="flex-1 max-w-[100px] h-1.5 rounded-full bg-border overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${row.status === "Failed" ? "bg-critical" : "bg-teal"}`}
                                            style={{ width: `${row.progress}%` }}
                                        />
                                    </div>
                                    <span className="text-xs text-text-muted">{row.progress}%</span>
                                </div>
                                <div className="flex gap-1">
                                    {vulnColors.slice(0, row.vuln.length).map((c, j) => (
                                        <span
                                            key={j}
                                            className="w-[22px] h-[22px] rounded-[5px] flex items-center justify-center text-[11px] font-bold text-white"
                                            style={{ backgroundColor: c }}
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
                <div className="py-3 px-1 flex justify-between items-center">
                    <span className="text-xs text-text-muted">Showing {filtered.length} of {scans.length} Scans</span>
                    <div className="flex gap-1.5">
                        <button className="p-1 px-2 rounded-md border border-border bg-transparent cursor-pointer text-text-muted hover:bg-surface transition-colors">
                            <Icon name="chevronLeft" size={13} />
                        </button>
                        <button className="p-1 px-2 rounded-md border border-border bg-transparent cursor-pointer text-text-muted hover:bg-surface transition-colors">
                            <Icon name="chevronRight" size={13} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
