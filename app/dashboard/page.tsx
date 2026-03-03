"use client";

import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import StatsBar from "@/components/StatsBar";
import ScanTable from "@/components/ScanTable";

export default function DashboardPage() {
    const router = useRouter();

    return (
        <div className="flex-1 flex flex-col bg-bg min-h-screen font-sans min-w-0 overflow-hidden">
            {/* Header */}
            <div className="h-[52px] bg-header border-b border-border flex items-center px-6 gap-3 shrink-0">
                <span className="text-[15px] font-semibold text-text">Scan</span>
                <Icon name="chevronRight" size={13} />
                <span className="text-[13px] text-text-muted">Private Assets</span>
                <Icon name="chevronRight" size={13} />
                <span className="text-[13px] text-teal font-medium">New Scan</span>
                <div className="ml-auto flex gap-2">
                    <button className="px-4 py-[7px] rounded-lg border border-border bg-transparent text-text text-[13px] cursor-pointer font-sans hover:bg-surface transition-colors">
                        Export Report
                    </button>
                    <button className="px-4 py-[7px] rounded-lg border border-critical/40 bg-transparent text-critical text-[13px] cursor-pointer font-sans hover:bg-critical/5 transition-colors">
                        Stop Scan
                    </button>
                </div>
            </div>

            {/* Org bar */}
            <div className="bg-surface border-b border-border px-6 py-3 flex items-center flex-nowrap overflow-x-auto shrink-0 gap-0">
                {[
                    ["Org:", "Project X"],
                    ["Owner:", "Nammagiri"],
                    ["Total Scans:", "100"],
                    ["Scheduled:", "1000"],
                    ["Rescans:", "100"],
                    ["Failed Scans:", "100"],
                ].map(([label, val], i) => (
                    <div key={i} className="flex items-center shrink-0">
                        <span className="text-xs text-text-muted mr-1.5 whitespace-nowrap">{label}</span>
                        <span className="text-[13px] text-text font-semibold mr-4 whitespace-nowrap">{val}</span>
                        {i < 5 && <div className="w-px h-4 bg-border mr-4 shrink-0" />}
                    </div>
                ))}
                <div className="ml-auto flex items-center gap-1.5">
                    <Icon name="refresh" size={13} color="#0CC8A8" />
                    <span className="text-xs text-text-muted">10 mins ago</span>
                </div>
            </div>

            <StatsBar />
            <ScanTable onNavigate={(path) => router.push(path)} />
        </div>
    );
}
