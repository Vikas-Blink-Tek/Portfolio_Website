"use client";
import { useEffect, useRef, ElementType, createElement } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#01ABCDEF";

export function ScrambleText({ text, className = "", as = "span" }: { text: string; className?: string; as?: ElementType }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current!;
    let frame = 0, raf = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { el.textContent = text; return; }
    const queue = [...text].map((ch, i) => ({ ch, start: Math.floor(i * 2), end: Math.floor(i * 2) + 10 + Math.floor(Math.random() * 20) }));
    const run = () => {
      let out = "", done = 0;
      queue.forEach((q) => {
        if (frame >= q.end) { done++; out += q.ch; }
        else if (frame >= q.start) out += `<span class="text-accent/70">${CHARS[Math.floor(Math.random() * CHARS.length)]}</span>`;
        else out += "";
      });
      el.innerHTML = out;
      if (done < queue.length) { frame++; raf = requestAnimationFrame(run); }
      else el.textContent = text;
    };
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { run(); io.disconnect(); }
    }), { threshold: 0.5 });
    io.observe(el);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [text]);
  return createElement(as as ElementType, { ref, className }, text);
}
