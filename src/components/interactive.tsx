"use client";

import Image from "next/image";
import {
  useState,
  useRef,
  useEffect,
  type ReactNode,
  type KeyboardEvent,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Menu,
  Terminal,
  X,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? {} : { opacity: [0.85, 1], y: [12, 0] }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ type: "spring", stiffness: 90, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Projects", "Architecture", "Experience", "Skills", "Contact"];
  return (
    <header className="header">
      <div className="header-inner">
        <a className="brand" href="#home">
          <span className="brand-symbol" aria-hidden="true">
            m<span>.</span>
          </span>
          <span>
            mohamed.ehab<span className="accent">_</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </nav>
        <a className="nav-cv" href={siteConfig.cv} download>
          Resume / CV <ArrowUpRight size={14} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
const icons = [Cpu, Layers, GitBranch, Database];
export function SystemOverview() {
  const [active, setActive] = useState(0);
  return (
    <div className="system-overview">
      <div className="panel-top">
        <span>
          <Terminal size={14} /> system.overview
        </span>
        <span className="mono">ME / 01</span>
      </div>
      <div className="portrait-panel">
        <div className="portrait-frame">
          <Image
            src={siteConfig.portrait}
            alt={siteConfig.portraitAlt}
            width={506}
            height={506}
            sizes="(max-width: 400px) 128px, 176px"
            priority
          />
        </div>
        <div className="portrait-caption">
          <span className="eyebrow">THE ENGINEER</span>
          <strong>{siteConfig.name}</strong>
          <span>AI / ML &amp; Infrastructure</span>
          <span className="portrait-location">
            <span className="status-dot" /> Cairo, Egypt
          </span>
        </div>
      </div>
      <div className="overview-body">
        <div className="overview-title">
          <span className="system-cross">+</span>
          <span className="mono">ENGINEERING AT EVERY LAYER</span>
        </div>
        <div className="system-rows">
          {siteConfig.domains.map((domain, i) => {
            const Icon = icons[i];
            return (
              <button
                key={domain.title}
                className={`system-row ${active === i ? "selected" : ""}`}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
              >
                <span className="system-icon">
                  <Icon size={18} />
                </span>
                <span>
                  <strong>{domain.title}</strong>
                  <small>{domain.detail}</small>
                </span>
                <span className="row-index">0{i + 1}</span>
              </button>
            );
          })}
        </div>
        <div className="system-path">
          <span className="status-dot" />
          <code>{siteConfig.domains[active].path}</code>
        </div>
      </div>
      <div className="panel-bottom">
        <span>MODEL → PRODUCT → INFRASTRUCTURE</span>
        <span className="accent">↳</span>
      </div>
    </div>
  );
}
export function CopyEmail() {
  const [status, setStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setStatus("Email copied to clipboard.");
    } catch {
      setStatus(`Copy unavailable. Email: ${siteConfig.email}`);
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(""), 5000);
  }
  return (
    <>
      <button
        className="copy-button"
        onClick={copy}
        aria-label="Copy email address"
      >
        {status.startsWith("Email copied") ? (
          <Check size={18} />
        ) : (
          <Copy size={18} />
        )}
      </button>
      <span className="toast" role="status">
        {status}
      </span>
    </>
  );
}
export function onTabKey(
  event: KeyboardEvent<HTMLButtonElement>,
  index: number,
  count: number,
  select: (i: number) => void,
) {
  let next = index;
  if (event.key === "ArrowRight") next = (index + 1) % count;
  else if (event.key === "ArrowLeft") next = (index - 1 + count) % count;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = count - 1;
  else return;
  event.preventDefault();
  select(next);
  document.getElementById(`gain-tab-${next}`)?.focus();
}
