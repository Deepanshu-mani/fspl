import Icon from "./Icon";
import { RED, ORANGE, YELLOW } from "@/lib/theme";

const stats = [
    { label: "Critical Severity", val: 86, change: "+2%", up: true, icon: "critical", color: RED, colorClass: "bg-critical/15" },
    { label: "High Severity", val: 16, change: "+0.9%", up: true, icon: "warning", color: ORANGE, colorClass: "bg-high/15" },
    { label: "Medium Severity", val: 26, change: "+0.9%", up: false, icon: "warning", color: YELLOW, colorClass: "bg-medium/15" },
    { label: "Low Severity", val: 16, change: "+0.9%", up: true, icon: "magnify", color: "#60A5FA", colorClass: "bg-blue-400/15" },
];

export default function StatsBar() {
    return (
        <div className="bg-surface border-b border-border grid grid-cols-4 shrink-0">
            {stats.map((s, i) => (
                <div key={i} className={`px-6 py-[18px] ${i < 3 ? "border-r border-border" : ""}`}>
                    <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[13px] text-text-muted font-medium">{s.label}</span>
                        <div className={`w-7 h-7 rounded-lg ${s.colorClass} flex items-center justify-center`}>
                            <Icon name={s.icon} size={14} color={s.color} />
                        </div>
                    </div>
                    <div>
                        <span className="text-[30px] font-bold text-text tracking-tight leading-none">{s.val}</span>
                        <div
                            className={`text-[11px] mt-2 leading-relaxed ${s.up
                                ? s.label.includes("Medium")
                                    ? "text-low"
                                    : "text-critical"
                                : "text-low"
                                }`}
                        >
                            {s.up ? "↑" : "↓"} {s.change} {s.label.includes("Medium") ? "decrease" : "increase"} than yesterday
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
