"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import { useTheme } from "@/lib/theme";

export default function LoginPage() {
  const router = useRouter();
  const { dark, toggle: toggleDark } = useTheme();
  const [showPass, setShowPass] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ first: "", last: "", email: "", pass: "" });

  return (
    <div className="min-h-screen flex font-sans relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 15% 60%, rgba(12,200,168,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 70% 80%, rgba(239,68,68,0.25) 0%, transparent 55%), radial-gradient(ellipse 40% 50% at 80% 20%, rgba(249,115,22,0.2) 0%, transparent 50%), #0a0a0a",
        }}
      />
      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Theme toggle */}
      <button
        onClick={toggleDark}
        className="absolute top-5 right-5 z-50 bg-white/10 border border-white/15 rounded-md px-2.5 py-1 cursor-pointer text-white text-[13px] hover:bg-white/20 transition-colors"
      >
        {dark ? "☀" : "☾"}
      </button>

      {/* Left column */}
      <div className="flex-1 flex flex-col px-[60px] py-10 relative z-[1] justify-center">
        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-20">
          <div className="w-9 h-9 rounded-full bg-teal flex items-center justify-center shadow-[0_0_20px_rgba(12,200,168,0.4)]">
            <div className="w-3 h-3 bg-white rounded-sm rotate-45" />
          </div>
          <span className="font-bold text-xl text-white tracking-tight">aps</span>
        </div>

        <h1 className="text-[42px] font-bold text-white mb-4 leading-[1.2] -tracking-[1px]">
          Expert level Cybersecurity
          <br />
          in <span className="text-teal">hours</span> not weeks.
        </h1>

        <div className="mt-9">
          <div className="text-[13px] text-gray-500 font-medium mb-4 tracking-wide">What&apos;s included</div>
          {[
            "Effortlessly spider and map targets to uncover hidden security flaws",
            "Deliver high-quality, validated findings in hours, not weeks.",
            "Generate professional, enterprise-grade security reports automatically.",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 mb-3.5 items-start">
              <div className="mt-[3px] shrink-0">
                <Icon name="check" size={15} color="#0CC8A8" />
              </div>
              <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-[60px]">
          <div className="flex items-center gap-2 mb-1.5">
            <Icon name="star" size={14} color="#22C55E" />
            <span className="text-[13px] text-gray-400">Trustpilot</span>
          </div>
          <div className="text-sm text-white font-semibold">
            Rated 4.5/5.0{" "}
            <span className="text-gray-500 font-normal text-xs">(100k+ reviews)</span>
          </div>
        </div>
      </div>

      {/* Right column – Form card */}
      <div className="w-[480px] flex items-center justify-center p-10 relative z-[1]">
        <div className="bg-white rounded-2xl p-10 w-full shadow-[0_32px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,0,0,0.06)]">
          <h2 className="text-[26px] font-bold text-gray-900 text-center mb-1.5 -tracking-[0.5px]">Sign up</h2>
          <p className="text-center text-[13px] text-gray-500 mb-7">
            Already have an account?{" "}
            <span className="text-teal cursor-pointer font-medium hover:underline">Log in</span>
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push("/dashboard");
            }}
          >
            <div className="flex gap-3 mb-3.5">
              {(["first", "last"] as const).map((f, i) => (
                <input
                  key={f}
                  placeholder={i === 0 ? "First name*" : "Last name*"}
                  value={form[f]}
                  onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                  className="flex-1 px-3.5 py-3 rounded-[10px] border-[1.5px] border-gray-200 text-sm text-gray-900 outline-none font-sans bg-gray-50 focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all placeholder:text-gray-400"
                />
              ))}
            </div>

            {[
              { key: "email" as const, placeholder: "Email address*", type: "email" },
              { key: "pass" as const, placeholder: "Password (8+ characters)*", type: showPass ? "text" : "password" },
            ].map(({ key, placeholder, type }) => (
              <div key={key} className="relative mb-3.5">
                <input
                  placeholder={placeholder}
                  value={form[key]}
                  type={type}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className={`w-full px-3.5 py-3 rounded-[10px] border-[1.5px] border-gray-200 text-sm text-gray-900 outline-none font-sans bg-gray-50 focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all placeholder:text-gray-400 ${key === "pass" ? "pr-11" : ""}`}
                />
                {key === "pass" && (
                  <button
                    type="button"
                    onClick={() => setShowPass((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Icon name={showPass ? "eyeOff" : "eye"} size={16} color="#999" />
                  </button>
                )}
              </div>
            ))}

            <div className="flex items-start gap-2.5 my-2 mb-5">
              <div
                onClick={() => setAgreed((a) => !a)}
                className={`w-4 h-4 rounded shrink-0 mt-0.5 flex items-center justify-center cursor-pointer border-[1.5px] transition-colors ${agreed ? "bg-teal border-teal" : "bg-transparent border-gray-300"
                  }`}
              >
                {agreed && <Icon name="check" size={10} color="#fff" />}
              </div>
              <span className="text-[12.5px] text-gray-500 leading-relaxed">
                I agree to Aps&apos;s{" "}
                <span className="text-teal cursor-pointer hover:underline">Terms &amp; Conditions</span> and acknowledge the{" "}
                <span className="text-teal cursor-pointer hover:underline">Privacy Policy</span>
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl border-none bg-gradient-to-br from-teal to-teal-hover text-white text-[15px] font-semibold cursor-pointer font-sans tracking-wide shadow-[0_8px_24px_rgba(12,200,168,0.27)] hover:shadow-[0_12px_32px_rgba(12,200,168,0.35)] active:scale-[0.98] transition-all"
            >
              Create account
            </button>
          </form>

          <div className="flex gap-2.5 mt-4">
            {[
              { label: "Apple", className: "bg-black text-white" },
              { label: "Google", className: "bg-gray-100 text-gray-600" },
              { label: "Meta", className: "bg-[#0866FF] text-white" },
            ].map(({ label, className }) => (
              <button
                key={label}
                className={`flex-1 py-2.5 rounded-[10px] border-none cursor-pointer flex items-center justify-center transition-opacity hover:opacity-85 ${className}`}
              >
                <span className="text-base font-bold">
                  {label === "Apple" ? "" : label === "Google" ? "G" : "∞"}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
