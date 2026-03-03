"use client";

import { useState, useCallback, useEffect } from "react";

// ── Color Constants (for SVG strokes / JS-only usage) ───────────────────────
export const TEAL = "#0CC8A8";
export const RED = "#EF4444";
export const ORANGE = "#F97316";
export const YELLOW = "#EAB308";
export const GREEN = "#22C55E";

// ── useTheme Hook ───────────────────────────────────────────────────────────
function getInitialDark(): boolean {
    if (typeof window !== "undefined") {
        const stored = localStorage.getItem("theme");
        if (stored === "light") return false;
        if (stored === "dark") return true;
    }
    return true; // default to dark
}

export function useTheme() {
    const [dark, setDark] = useState(getInitialDark);

    // Sync the class on mount and when dark changes
    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    const toggle = useCallback(() => {
        setDark((d) => !d);
    }, []);

    return { dark, toggle };
}
