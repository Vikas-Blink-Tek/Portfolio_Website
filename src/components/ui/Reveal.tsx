"use client";
import { ReactNode, ElementType, createElement } from "react";
import { useReveal } from "@/hooks/useEnv";

export function Reveal({ children, className = "", delay = 0, as = "div" }: {
  children: ReactNode; className?: string; delay?: number; as?: ElementType;
}) {
  const ref = useReveal<HTMLElement>();
  return createElement(
    as,
    { ref, className: `reveal-on-scroll ${className}`, style: { transitionDelay: `${delay}ms` } },
    children
  );
}
