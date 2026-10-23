"use client";

import React from "react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

interface ToastProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

export default function Toast({ type, message, onClose }: ToastProps) {
  const isSuccess = type === "success";

  return (
    <div
      role="alert"
      className={`fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-xl border flex items-start gap-3 shadow-2xl transition-all ${
        isSuccess
          ? "bg-[#111911] border-accent/40 text-foreground"
          : "bg-[#1f1212] border-red-500/40 text-foreground"
      }`}
    >
      {isSuccess ? (
        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
      ) : (
        <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
      )}

      <div className="flex-1 text-xs sm:text-sm font-sans leading-relaxed">
        <p className="font-semibold mb-0.5 font-mono text-xs uppercase tracking-wider">
          {isSuccess ? "Message sent" : "Submission notice"}
        </p>
        <p className="text-muted">{message}</p>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close notification"
        className="text-muted hover:text-foreground p-1 rounded-md"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
