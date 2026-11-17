"use client";

import * as React from "react";
import { useModals } from "./modal-context";
import { BrandEnquiryForm } from "@/components/forms/brand-enquiry-form";
import { X, Send } from "lucide-react";

export function BrandModal() {
  const { isBrandModalOpen, closeBrandModal } = useModals();

  if (!isBrandModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={closeBrandModal}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl bg-[#0D0B17] border border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/60 my-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={closeBrandModal}
          className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 space-y-1 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-2">
            <Send className="w-3 h-3 text-purple-400" />
            <span>Brand Partnerships</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Start a Campaign
          </h2>
          <p className="text-zinc-400 text-sm">
            Tell us about your product and campaign goals. Let&apos;s explore how GrowthiveMedia can help.
          </p>
        </div>

        <BrandEnquiryForm />
      </div>
    </div>
  );
}
