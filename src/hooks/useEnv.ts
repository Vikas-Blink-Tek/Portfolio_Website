"use client";
import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

/** 0 = off/low, 1 = mid, 2 = high */
export function useQualityTier() {
  const [tier, setTier] = useState(1);
  useEffect(() => {
    const w = window.innerWidth;
    const mem = (navigator as unknown as { deviceMemory?: number }).deviceMemory ?? 4;
    const cores = navigator.hardwareConcurrency ?? 4;
    let t = 2;
    if (w < 1024 || mem <= 4 || cores <= 4) t = 1;
    if (mem <= 1) t = 0;
    setTier(t);
  }, []);
  return tier;
}

/** Reveal-on-scroll: adds `.is-visible` when the element enters the viewport. */
export function useReveal<T extends HTMLElement>() {
  const [ref, setRef] = useState<T | null>(null);
  useEffect(() => {
    if (!ref) return;
    if (typeof IntersectionObserver === "undefined") { ref.classList.add("is-visible"); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(ref);
    return () => io.disconnect();
  }, [ref]);
  return setRef;
}
