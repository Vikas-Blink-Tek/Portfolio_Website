"use client";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#work", label: "Work" },
  { href: "#security", label: "Security" },
  { href: "#timeline", label: "Timeline" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "bg-void/80 backdrop-blur-xl border-b border-white/[0.06]" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-content px-5 md:px-14 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-mono text-sm font-bold tracking-wider text-warm-white">VIKAS MAURYA</span>
          <span className="hidden sm:inline font-mono text-[10px] tracking-[0.2em] text-outline">// LAB.01</span>
        </a>
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs tracking-wide text-grey hover:text-warm-white px-3 py-2 rounded hover:bg-surface transition-colors"
            >
              <span className="text-outline mr-1">{String(i + 1).padStart(2, "0")}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-xs tracking-wide text-accent hover:text-warm-white border border-accent/40 hover:border-accent hover:bg-accent/10 px-3 py-1.5 rounded transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
