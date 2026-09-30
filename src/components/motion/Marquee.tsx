"use client";
import { ReactNode } from "react";

export function Marquee({ items, className = "", reverse = false }: { items: string[]; className?: string; reverse?: boolean }) {
  const row: ReactNode = (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden>
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-10">
          <span>{it}</span>
          <span className="text-accent">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className={`marquee ${className}`}>
      <div className={`marquee__track ${reverse ? "marquee__track--rev" : ""}`}>
        {row}{row}
      </div>
    </div>
  );
}
