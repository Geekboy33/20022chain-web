"use client";

import { useState } from "react";
import { ChainLanding } from "@/components/ChainLanding";
import { I18nProvider } from "@/lib/i18n";
import { X, Copy, Check, Lock } from "lucide-react";

function CredentialsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState("");
  if (!open) return null;

  const copy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative bg-[#0f0f12] border border-white/10 rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-colors"><X size={18} /></button>

        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4">
            <Lock size={22} className="text-[#09090b]" />
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">Access Explorer</h2>
          <p className="text-sm text-white/50 mt-2">Use these credentials to access the full 20022Chain blockchain explorer</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-[10px] font-bold text-white/40 uppercase tracking-wider block mb-2">Email</label>
            <div className="flex items-center gap-2 p-3 bg-white/[0.04] border border-white/[0.08] rounded-xl">
              <span className="font-mono text-sm text-[#d4a855] flex-1">admin@20022chain.com</span>
              <button onClick={() => copy("admin@20022chain.com", "email")} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
                {copied === "email" ? <Check size={14} className="text-[#10B981]" /> : <Copy size={14} className="text-white/30" />}
              </button>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-white/40 uppercase tracking-wider block mb-2">Password</label>
            <div className="flex items-center gap-2 p-3 bg-white/[0.04] border border-white/[0.08] rounded-xl">
              <span className="font-mono text-sm text-white flex-1">chain2026</span>
              <button onClick={() => copy("chain2026", "pass")} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
                {copied === "pass" ? <Check size={14} className="text-[#10B981]" /> : <Copy size={14} className="text-white/30" />}
              </button>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-white/30 text-center mt-6">Any valid email with password <span className="text-white/60 font-mono">chain2026</span> works</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [showCreds, setShowCreds] = useState(false);

  return (
    <I18nProvider>
      <ChainLanding onLogin={() => setShowCreds(true)} />
      <CredentialsModal open={showCreds} onClose={() => setShowCreds(false)} />
    </I18nProvider>
  );
}
