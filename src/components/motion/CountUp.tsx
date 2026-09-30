"use client";
import { useEffect, useRef, useState } from "react";

export function CountUp({ end, suffix = "", prefix = "", duration = 1600 }: { end: number; suffix?: string; prefix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setVal(end); return; }
    let raf = 0, startT = 0;
    const animate = () => {
      const tick = (t: number) => {
        if (!startT) startT = t;
        const p = Math.min((t - startT) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(end * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const check = () => {
      if (started.current) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9 && r.bottom > 0) {
        started.current = true;
        animate();
      }
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    const id = window.setInterval(check, 200); // catches smooth-scroll (Lenis) frames
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", check); clearInterval(id); };
  }, [end, duration]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}
