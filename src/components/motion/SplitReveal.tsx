"use client";
import { useEffect, useRef, ElementType, createElement } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Splits text into words+chars and staggers them up as it scrolls into view. */
export function SplitReveal({ text, className = "", as = "h2" }: { text: string; className?: string; as?: ElementType }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.registerPlugin(ScrollTrigger);
    const words = text.split(" ");
    el.innerHTML = words
      .map((w) => `<span class="inline-block overflow-hidden align-bottom"><span class="split-char inline-block">${w}</span></span>`)
      .join(" ");
    const chars = el.querySelectorAll(".split-char");
    gsap.set(chars, { yPercent: 115 });
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      onEnter: () => gsap.to(chars, { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.06 }),
    });
    return () => st.kill();
  }, [text]);
  return createElement(as as ElementType, { ref, className }, text);
}
