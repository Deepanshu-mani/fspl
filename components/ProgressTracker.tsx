import Icon from "./Icon";
import { TEAL } from "@/lib/theme";

const steps = ["Spidering", "Mapping", "Testing", "Validating", "Reporting"];
const stepIcons = ["spider", "map", "flask", "check", "file"];

export default function ProgressTracker() {
    return (
        <div className="bg-surface border-b border-border px-8 py-6 shrink-0">
            <div className="flex items-start gap-8">
                {/* Circle progress */}
                <div className="shrink-0 flex items-center">
                    <div className="w-[90px] h-[90px] rounded-full bg-surface-2 border-[3px] border-border flex flex-col items-center justify-center relative">
                        <svg className="absolute -top-[3px] -left-[3px] -rotate-90" width={96} height={96}>
                            <circle cx={48} cy={48} r={44} fill="none" stroke="var(--color-border)" strokeWidth={3} />
                            <circle
                                cx={48} cy={48} r={44} fill="none" stroke={TEAL} strokeWidth={3}
                                strokeDasharray={`0 ${2 * Math.PI * 44}`} strokeLinecap="round"
                            />
                        </svg>
                        <span className="text-xl font-bold text-text">0%</span>
                        <span className="text-[11px] text-text-muted">In Progress</span>
                    </div>
                </div>

                <div className="flex-1">
                    {/* Step tracker */}
                    <div className="flex items-start relative mb-6">
                        <div className="absolute top-[18px] left-5 right-5 h-0.5 bg-border z-0" />
                        {steps.map((step, i) => {
                            const isActive = i === 0;
                            return (
                                <div key={step} className="flex-1 flex flex-col items-center gap-2 relative z-[1]">
                                    <div
                                        className={`w-9 h-9 rounded-full flex items-center justify-center border-2 ${isActive
                                            ? "bg-teal border-teal shadow-[0_0_14px_rgba(12,200,168,0.4)]"
                                            : "bg-surface-2 border-border"
                                            }`}
                                    >
                                        <Icon name={stepIcons[i]} size={15} color={isActive ? "#fff" : undefined} />
                                    </div>
                                    <span className={`text-xs ${isActive ? "text-text font-medium" : "text-text-muted"}`}>{step}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Metadata row */}
                    <div className="flex gap-8 flex-wrap">
                        {[
                            ["Scan Type", "Grey Box"],
                            ["Targets", "google.com"],
                            ["Started At", "Nov 22, 09:00AM"],
                            ["Credentials", "2 Active"],
                            ["Files", "Control.pdf"],
                            ["Checklists", "40/350"],
                        ].map(([label, val]) => (
                            <div key={label}>
                                <div className="text-[11px] text-text-muted mb-0.5">{label}</div>
                                <div className={`text-[13px] font-semibold ${val === "40/350" ? "text-teal" : "text-text"}`}>{val}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
