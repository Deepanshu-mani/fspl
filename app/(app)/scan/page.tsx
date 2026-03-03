"use client";

import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import ProgressTracker from "@/components/ProgressTracker";
import LiveConsole from "@/components/LiveConsole";
import FindingLog from "@/components/FindingLog";
import { useToast } from "@/components/Toast";

export default function ScanPage() {
    const router = useRouter();
    const toast = useToast();

    return (
        <div className="flex-1 flex flex-col bg-bg h-screen font-sans min-w-0 overflow-hidden">
            {/* Header */}
            <header className="h-[52px] bg-header border-b border-border flex items-center px-6 gap-2 shrink-0">
                <span className="text-sm font-semibold text-text">Scan</span>
                <Icon name="home" size={14} color="#888" />
                <span className="text-text-muted text-sm">/</span>
                <span
                    className="text-[13px] text-text-muted cursor-pointer hover:text-text transition-colors"
                    onClick={() => router.push("/dashboard")}
                >
                    Private Assets
                </span>
                <span className="text-text-muted text-sm">/</span>
                <span className="text-[13px] text-teal font-medium">New Scan</span>

                <div className="ml-auto flex gap-2">
                    <button
                        onClick={() => toast.show("Report exported successfully")}
                        className="px-4 py-[7px] rounded-lg border border-border bg-transparent text-text text-[13px] cursor-pointer font-sans hover:bg-surface transition-colors"
                    >
                        Export Report
                    </button>
                    <button
                        onClick={() => toast.show("Scan stopped", "error")}
                        className="px-4 py-[7px] rounded-lg border border-critical/40 bg-transparent text-critical text-[13px] cursor-pointer font-sans hover:bg-critical/5 transition-colors"
                    >
                        Stop Scan
                    </button>
                </div>
            </header>

            <div className="mx-6 mt-3 shrink-0">
                <ProgressTracker />
            </div>

            {/* Console + Findings */}
            <div className="flex-1 px-6 py-3 overflow-hidden flex flex-col min-h-0">
                <div className="flex-1 flex overflow-hidden bg-surface rounded-[10px] border border-border md:flex-row flex-col">
                    <LiveConsole />
                    <FindingLog />
                </div>
            </div>

            {/* Status bar */}
            <footer className="h-9 bg-status-bar border-t border-border flex items-center px-6 gap-6 shrink-0">
                {[
                    ["Sub-Agents:", "0"],
                    ["Parallel Executions:", "2"],
                    ["Operations:", "1"],
                ].map(([label, val]) => (
                    <div key={label} className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-text-muted" />
                        <span className="text-[11px] text-text-muted">{label}</span>
                        <span className="text-[11px] text-text font-semibold">{val}</span>
                    </div>
                ))}
                <div className="ml-auto flex gap-4">
                    {[
                        ["Critical:", "0", "text-critical"],
                        ["High:", "0", "text-high"],
                        ["Medium:", "0", "text-medium"],
                        ["Low:", "0", "text-low"],
                    ].map(([label, val, color]) => (
                        <div key={label} className="flex gap-1">
                            <span className="text-[11px] text-text-muted">{label}</span>
                            <span className={`text-[11px] font-semibold ${color}`}>{val}</span>
                        </div>
                    ))}
                </div>
            </footer>
        </div>
    );
}
