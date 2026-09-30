import { ElementType, createElement } from "react";

export function SplitReveal({ text, className = "", as = "h2" }: { text: string; className?: string; as?: ElementType }) {
  return createElement(as as ElementType, { className }, text);
}
