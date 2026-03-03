"use client";

import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import ProgressTracker from "@/components/ProgressTracker";
import LiveConsole from "@/components/LiveConsole";
import FindingLog from "@/components/FindingLog";

export default function ScanDetailPage() {
    const router = useRouter();

    return (
        <div className="flex-1 flex flex-col bg-bg min-h-screen font-sans min-w-0 overflow-hidden">
            {/* Header */}
            <div className="h-[52px] bg-header border-b border-border flex items-center px-6 gap-3 shrink-0">
                <span className="text-[15px] font-semibold text-text">Scan</span>
                <Icon name="chevronRight" size={13} />
                <span
                    className="text-[13px] text-text-muted cursor-pointer hover:text-text-sub transition-colors"
                    onClick={() => router.push("/dashboard")}
                >
                    Private Assets
                </span>
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

            <ProgressTracker />

            {/* Console area */}
            <div className="flex-1 px-6 py-4 overflow-hidden flex flex-col">
                <div className="flex-1 flex overflow-hidden">
                    <LiveConsole />
                    <FindingLog />
                </div>
            </div>

            {/* Status bar */}
            <div className="h-9 bg-status-bar border-t border-border flex items-center px-6 gap-6 shrink-0">
                {[
                    ["Sub-Agents:", "0"],
                    ["Parallel Executions:", "2"],
                    ["Operations:", "1"],
                ].map(([k, v]) => (
                    <div key={k} className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-text-muted" />
                        <span className="text-[11px] text-text-muted">{k}</span>
                        <span className="text-[11px] text-text font-semibold">{v}</span>
                    </div>
                ))}
                <div className="ml-auto flex gap-4">
                    {[
                        ["Critical:", "0", "text-critical"],
                        ["High:", "0", "text-high"],
                        ["Medium:", "0", "text-medium"],
                        ["Low:", "0", "text-low"],
                    ].map(([k, v, cls]) => (
                        <div key={k} className="flex gap-1">
                            <span className="text-[11px] text-text-muted">{k}</span>
                            <span className={`text-[11px] font-semibold ${cls}`}>{v}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
