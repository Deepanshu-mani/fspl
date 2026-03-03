import { RED, ORANGE, YELLOW } from "@/lib/theme";

const findings = [
    {
        severity: "Critical",
        color: RED,
        bg: "bg-critical",
        time: "10:45:23",
        title: "SQL Injection in Authentication Endpoint",
        path: "/api/users/profile",
        desc: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
    },
    {
        severity: "High",
        color: ORANGE,
        bg: "bg-high",
        time: "10:45:23",
        title: "Unauthorized Access to User Metadata",
        path: "/api/auth/login",
        desc: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
    },
    {
        severity: "Medium",
        color: YELLOW,
        bg: "bg-medium",
        time: "10:45:23",
        title: "Broken Authentication Rate Limiting",
        path: "/api/search",
        desc: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
    },
];

export default function FindingLog() {
    return (
        <div className="w-[380px] flex flex-col shrink-0 border-l border-border overflow-hidden">
            <div className="px-4 py-2.5 border-b border-border shrink-0">
                <span className="text-[13px] font-semibold text-text">Finding Log</span>
            </div>
            <div className="flex-1 overflow-auto p-3 flex flex-col gap-2.5 bg-bg">
                {findings.map((f, i) => (
                    <div key={i} className="bg-surface rounded-lg border border-card-border p-3.5">
                        <div className="flex items-center justify-between mb-1.5">
                            <span
                                className="text-[11px] font-bold py-0.5 px-2 rounded text-white"
                                style={{ backgroundColor: f.color }}
                            >
                                {f.severity}
                            </span>
                            <span className="text-[11px] text-text-muted">{f.time}</span>
                        </div>
                        <div className="text-[13px] font-semibold text-text mb-1">{f.title}</div>
                        <div className="text-xs text-teal font-mono mb-1.5">{f.path}</div>
                        <div className="text-xs text-text-muted leading-relaxed">{f.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
