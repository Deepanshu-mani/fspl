"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";

type Toast = { id: number; message: string; type?: "success" | "error" | "info" };

const ToastContext = createContext<{ show: (msg: string, type?: Toast["type"]) => void }>({
    show: () => { },
});

export function useToast() {
    return useContext(ToastContext);
}

let nextId = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const show = useCallback((message: string, type: Toast["type"] = "success") => {
        const id = nextId++;
        setToasts((t) => [...t, { id, message, type }]);
        setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2500);
    }, []);

    return (
        <ToastContext.Provider value={{ show }}>
            {children}
            <div className="fixed bottom-6 right-6 z-999 flex flex-col gap-2">
                {toasts.map((t) => (
                    <div
                        key={t.id}
                        className={`px-4 py-2.5 rounded-lg text-sm font-medium shadow-lg animate-slide-up ${t.type === "error"
                            ? "bg-critical text-white"
                            : t.type === "info"
                                ? "bg-surface border border-border text-text"
                                : "bg-teal text-white"
                            }`}
                    >
                        {t.message}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}
