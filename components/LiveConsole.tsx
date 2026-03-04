"use client";

import { useState, type ReactNode } from "react";
import Icon from "./Icon";


// ── Log Data ────────────────────────────────────────────────────────────────
type LogPart = string | { link?: string; quote?: string; code?: string; highlight?: string; bold?: string };

const logLines: { time: string; text: LogPart[] }[] = [
    { time: "09:00:00", text: ["I'll begin a systematic penetration test on ", { link: "helpdesk.democorp.com" }, ". Let me start with reconnaissance and enumeration."] },
    { time: "09:01:00", text: ["Good! target is online. Now let me perform port scanning to identify running services."] },
    { time: "09:02:00", text: ["Excellent reconnaissance results:\n  - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure."] },
    { time: "09:03:00", text: ["Great! I found a login page for a Help Desk Platform. I can see a useful comment: ", { quote: '"TODO: Delete the testing account (test:test)"' }, ". Let me test this credential. The login redirects to ", { code: "/password/test" }, ". Let me follow that path and explore it."] },
    { time: "09:04:00", text: ["The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to ", { quote: "'#'" }, " which means the current page. Let me try a different approach."] },
    { time: "09:05:00", text: ["It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the ", { link: "test:test" }, " password directly on other endpoints."] },
    { time: "09:06:00", text: ["Great! I can access the dashboard using the ", { highlight: "'X-UserId: 10032'" }, " header. The dashboard shows \"Welcome, John Doe\". This suggests an ", { bold: "**IDOR vulnerability**" }, " - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application..."] },
];

function renderLogText(parts: LogPart[]): ReactNode {
    return parts.map((p, i) => {
        if (typeof p === "string") return <span key={i}>{p}</span>;
        if (p.link) return <span key={i} className="text-teal underline">{p.link}</span>;
        if (p.quote) return <span key={i} className="text-teal">{p.quote}</span>;
        if (p.code) return <span key={i} className="bg-black dark:bg-gray-700 px-1.5 rounded-lg font-mono text-white dark:text-text">{p.code}</span>;
        if (p.highlight) return <span key={i} className="bg-teal/15 text-teal px-1.5 rounded">{p.highlight}</span>;
        if (p.bold) return <span key={i} className="text-critical font-semibold">{p.bold.replace(/\*\*/g, "")}</span>;
        return null;
    });
}

export default function LiveConsole() {
    const [activeTab, setActiveTab] = useState("activity");

    return (
        <div className="flex-1 flex flex-col overflow-hidden">
            {/* Console header */}
            <div className="px-5 py-3 border-b border-border flex items-center gap-3 shrink-0">
                <div className="w-2 h-2 rounded-full bg-teal shadow-[0_0_6px_var(--color-teal)]" />
                <span className="text-sm font-semibold text-text whitespace-nowrap">Live Scan Console</span>
                <div className="flex items-center gap-1.5 bg-gray-100  dark:bg-white rounded-full px-2.5 py-0.5">
                    <Icon name="clock" size={12} color="#999" />
                    <span className="text-xs text-gray-400">Running...</span>
                </div>
                <div className="ml-auto flex gap-2">
                    <Icon name="chevronDown" size={16} />
                    <Icon name="x" size={16} />
                </div>
            </div>

            <div className="flex-1 flex overflow-hidden">
                <div className="flex-1 flex flex-col min-w-0">
                    {/* Tabs */}
                    <div className="flex border-b border-border px-5 shrink-0">
                        {["Activity Log", "Verification Loops"].map((tab) => {
                            const key = tab === "Activity Log" ? "activity" : "loops";
                            const active = activeTab === key;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(key)}
                                    className={`px-3.5 py-2.5 border-none bg-none cursor-pointer text-[13px] font-sans -mb-px border-b-2 transition-colors ${active
                                        ? "text-teal font-semibold border-b-teal"
                                        : "text-text-muted font-normal border-b-transparent hover:text-text-sub"
                                        }`}
                                >
                                    {tab}
                                </button>
                            );
                        })}
                    </div>

                    {/* Log content */}
                    <div className="flex-1 overflow-auto px-5 py-4 font-mono text-[12.5px] leading-relaxed bg-bg">
                        {logLines.map((line, i) => (
                            <div key={i} className="mb-3">
                                <span className="text-text-muted">[{line.time}]</span>{" "}
                                <span className="text-text-sub whitespace-pre-wrap">
                                    {renderLogText(line.text)}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
