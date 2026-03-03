"use client";

import { useState, useCallback } from "react";

// ── Color Constants (for SVG strokes / JS-only usage) ───────────────────────
export const TEAL = "#0CC8A8";
export const RED = "#EF4444";
export const ORANGE = "#F97316";
export const YELLOW = "#EAB308";
export const GREEN = "#22C55E";

// ── useTheme Hook ───────────────────────────────────────────────────────────
export function useTheme() {
    const [dark, setDark] = useState(true);

    const toggle = useCallback(() => {
        setDark((d) => {
            const next = !d;
            document.documentElement.classList.toggle("dark", next);
            return next;
        });
    }, []);

    // Initialize dark class on mount
    if (typeof document !== "undefined" && dark) {
        document.documentElement.classList.add("dark");
    }

    return { dark, toggle };
}
