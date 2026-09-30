import { ReactNode } from "react";
import { ScrambleText } from "@/components/motion/ScrambleText";

export function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="flex items-center gap-3 mb-6" data-reveal="left">
      <span className="h-px w-8 bg-accent inline-block" aria-hidden />
      <ScrambleText
        text={`${index} / ${children}`}
        className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent"
      />
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

export function Panel({ children, className = "", ...rest }: { children: ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`rounded-lg border border-white/[0.07] bg-surface-low/80 backdrop-blur-sm ${className}`} {...rest}>
      {children}
    </div>
  );
}
