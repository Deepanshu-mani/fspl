import Icon from "./Icon";
import { TEAL } from "@/lib/theme";

const steps = ["Spidering", "Mapping", "Testing", "Validating", "Reporting"];
const stepIcons = ["radar", "layoutPanel", "flask", "shieldCheck", "clipboard"];

export default function ProgressTracker() {
    return (
        <div className="bg-surface border border-border rounded-[10px] px-4 md:px-8 py-4 shrink-0 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                {/* Progress circle */}
                <div className="shrink-0 flex items-center">
                    <div
                        className="w-[90px] h-[90px] rounded-full flex flex-col items-center justify-center relative shadow-[0_0_20px_rgba(12,200,168,0.15),inset_0_0_20px_rgba(12,200,168,0.05)]"
                        style={{ background: "radial-gradient(circle, rgba(12,200,168,0.06) 0%, transparent 70%)" }}
                    >
                        <span className="text-xl font-bold text-teal">0%</span>
                        <span className="text-[10px] text-teal/60">In Progress</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px self-stretch bg-border shrink-0" />

                <div className="flex-1 min-w-0 w-full">
                    {/* Steps */}
                    <div className="flex items-start relative mb-5">
                        <div className="absolute top-[21px] left-6 right-6 h-0.5 bg-border z-0" />
                        {steps.map((step, i) => {
                            const active = i === 0;
                            return (
                                <div key={step} className="flex-1 flex flex-col items-center gap-2 relative z-1">
                                    <div className={`w-[42px] h-[42px] rounded-full flex items-center justify-center border-2 transition-all ${active ? "bg-teal border-teal shadow-[0_0_14px_rgba(12,200,168,0.4)]" : "bg-surface border-border"
                                        }`}>
                                        <Icon name={stepIcons[i]} size={18} color={active ? "#fff" : TEAL} />
                                    </div>
                                    <span className={`text-xs ${active ? "text-text font-medium" : "text-text-muted"}`}>
                                        {step}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="h-px bg-border mb-4" />

                    {/* Metadata */}
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3 px-2 md:px-6">
                        {[
                            ["Scan Type", "Grey Box"],
                            ["Targets", "google.com"],
                            ["Started At", "Nov 22, 09:00AM"],
                            ["Credentials", "2 Active"],
                            ["Files", "Control.pdf"],
                            ["Checklists", "40/350"],
                        ].map(([label, val]) => (
                            <div key={label} className="text-center">
                                <div className="text-[11px] text-text-muted mb-0.5">{label}</div>
                                <div className={`text-[13px] font-semibold whitespace-nowrap ${val === "40/350" ? "text-teal" : "text-text"}`}>
                                    {val}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
