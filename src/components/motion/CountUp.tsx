export function CountUp({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string; duration?: number }) {
  return <span>{prefix}{end.toLocaleString()}{suffix}</span>;
}
