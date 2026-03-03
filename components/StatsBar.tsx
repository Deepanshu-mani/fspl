import Icon from "./Icon";

const stats = [
    { label: "Critical Severity", val: 86, change: "+2%", up: true, icon: "critical", color: "#ef4444", colorBg: "rgba(239,68,68,0.15)" },
    { label: "High Severity", val: 16, change: "+0.9%", up: true, icon: "warning", color: "#f97316", colorBg: "rgba(249,115,22,0.15)" },
    { label: "Medium Severity", val: 26, change: "+0.9%", up: false, icon: "warning", color: "#eab308", colorBg: "rgba(234,179,8,0.15)" },
    { label: "Low Severity", val: 16, change: "+0.9%", up: true, icon: "magnify", color: "#22c55e", colorBg: "rgba(34,197,94,0.15)" },
];

export default function StatsBar() {
    return (
        <div className="bg-surface border-b border-border grid grid-cols-2 md:grid-cols-4 shrink-0">
            {stats.map((s, i) => (
                <div key={i} className={`px-6 py-4 ${i < 3 ? "border-r border-border" : ""}`}>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[13px] text-text-muted font-medium">{s.label}</span>
                        <div className="w-7 h-7 rounded-[6px] flex items-center justify-center" style={{ backgroundColor: s.colorBg }}>
                            <Icon name={s.icon} size={15} color={s.color} />
                        </div>
                    </div>
                    <div>
                        <span className="text-[30px] font-bold text-text tracking-tight leading-none">{s.val}</span>
                        <div
                            className={`text-[11px] mt-2 leading-relaxed ${!s.up ? "text-low" : "text-critical"}`}
                        >
                            {s.up ? "↑" : "↓"} {s.change} {s.up ? "increase" : "decrease"} than yesterday
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
