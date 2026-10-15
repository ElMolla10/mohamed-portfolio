import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
export function SourceLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`source-link ${className}`}
    >
      {children}
      <ArrowUpRight size={15} />
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}
export function Verify({ children }: { children: string }) {
  return <span className="verify">{children}</span>;
}
export function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{number} / ENGINEERING NOTES</span>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
export function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
