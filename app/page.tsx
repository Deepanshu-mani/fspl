"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import { useTheme } from "@/lib/theme";
import Logo from "@/components/Logo";
import { FaApple, FaMeta } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const router = useRouter();
  const { dark, toggle: toggleDark } = useTheme();
  const [showPass, setShowPass] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ first: "", last: "", email: "", pass: "" });

  return (
    <div className="min-h-screen flex font-sans relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[#0a0a0a]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.3) 100%), url("/bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top Left Logo */}
      <div className="absolute top-10 left-[60px] z-50">
        <Logo />
      </div>


      {/* Left column */}
      <div className="flex-1 hidden md:flex flex-col px-[60px] py-10 relative z-1 justify-center">

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
            <Icon name="star" size={14} color="#22C55E" fill="#22C55E" />
            <span className="text-[13px] text-gray-400">Trustpilot</span>
          </div>
          <div className="text-sm text-white font-semibold">
            Rated 4.5/5.0{" "}
            <span className="text-gray-500 font-normal text-xs">(100k+ reviews)</span>
          </div>
        </div>
      </div>

      {/* Right column – Form card */}
      <div className="w-full md:w-[550px] flex items-center justify-center px-6 md:px-[60px] py-10 relative z-1">
        <div className="bg-white rounded-2xl p-10 w-full shadow-[0_32px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,0,0,0.06)]">
          <h2 className="text-[32px] font-bold text-[#333] text-center mb-1.5 tracking-tight">Sign up</h2>
          <p className="text-center text-[14px] text-[#444] font-medium mb-7">
            Already have an account?{" "}
            <span className="text-teal cursor-pointer hover:underline">Log in</span>
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push("/dashboard");
            }}
            className="flex flex-col gap-3.5"
          >
            {(["first", "last"] as const).map((f, i) => (
              <input
                key={f}
                placeholder={i === 0 ? "First name*" : "Last name*"}
                value={form[f]}
                onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 text-sm text-gray-900 outline-none font-sans bg-white focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all placeholder:text-gray-400"
              />
            ))}

            {[
              { key: "email" as const, placeholder: "Email address*", type: "email" },
              { key: "pass" as const, placeholder: "Password (8+ characters)*", type: showPass ? "text" : "password" },
            ].map(({ key, placeholder, type }) => (
              <div key={key} className="relative">
                <input
                  placeholder={placeholder}
                  value={form[key]}
                  type={type}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className={`w-full px-4 py-3.5 rounded-lg border border-gray-200 text-sm text-gray-900 outline-none font-sans bg-white focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all placeholder:text-gray-400 ${key === "pass" ? "pr-11" : ""}`}
                />
                {key === "pass" && (
                  <button
                    type="button"
                    onClick={() => setShowPass((s) => !s)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-gray-800 transition-colors"
                  >
                    <Icon name={showPass ? "eyeOff" : "eye"} size={18} color="currentColor" />
                  </button>
                )}
              </div>
            ))}

            <div className="flex items-start gap-3 mt-2 mb-3">
              <div
                onClick={() => setAgreed((a) => !a)}
                className={`w-4 h-4 rounded-[4px] shrink-0 flex items-center justify-center cursor-pointer border transition-colors ${agreed ? "bg-[#0A66C2] border-[#0A66C2]" : "bg-white border-gray-300"
                  }`}
              >
                {agreed && <Icon name="check" size={12} color="#fff" />}
              </div>
              <span className="text-[13px] text-gray-800 font-medium leading-tight">
                I agree to Aps&apos;s <span className="text-[#0A66C2] cursor-pointer hover:underline">Terms &amp; Conditions</span> and acknowledge the <span className="text-[#0A66C2] cursor-pointer hover:underline">Privacy Policy</span>
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full border-none bg-[#0e9f8d] text-white text-[15px] font-medium cursor-pointer font-sans tracking-wide hover:bg-[#0c8a7a] transition-all"
            >
              Create account
            </button>
          </form>

          <div className="flex gap-2.5 mt-4">
            {[
              {
                label: "Apple",
                className: "bg-black text-white",
                icon: <FaApple size={20} />
              },
              {
                label: "Google",
                className: "bg-gray-100 text-gray-600",
                icon: <FcGoogle size={20} />
              },
              {
                label: "Meta",
                className: "bg-[#0866FF] text-white",
                icon: <FaMeta size={20} />
              },
            ].map(({ label, className, icon }) => (
              <button
                key={label}
                className={`flex-1 py-3.5 rounded-full border-none cursor-pointer flex items-center justify-center transition-opacity hover:opacity-85 ${className}`}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
