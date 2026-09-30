import { ReactNode } from "react";

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="h-px w-8 bg-accent inline-block" aria-hidden />
      <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent">
        {index} / {children}
      </span>
    </div>
  );
}

export function Tag({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <span
      className={`font-mono text-[11px] tracking-wide px-2.5 py-1 rounded ${
        accent ? "bg-accent/15 text-accent" : "bg-surface-high text-grey"
      }`}
    >
      {children}
    </span>
  );
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-white/[0.07] bg-surface-low/80 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}
