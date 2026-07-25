"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

const links = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Our Approach", "#approach"],
  ["Our Services", "#services"],
  ["Gallery", "#gallery"],
  ["Contact Us", "#contact"]
];

export function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setSolid(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid ? "bg-navy/95 shadow-2xl backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="container-premium flex h-20 items-center justify-between">
        <Link href="#home" aria-label="Mohana Sri CNC Technics home"><Logo /></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className="text-sm font-semibold text-white/76 transition hover:text-white">{label}</Link>
          ))}
          <Link href="/login" className="text-sm font-semibold text-white/76 hover:text-white">Login</Link>
          <Link href="#contact" className="rounded-full bg-blue-500 px-5 py-3 text-sm font-extrabold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-400">Get Quote</Link>
        </nav>
        <button className="rounded-lg p-2 text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-navy px-5 py-5 lg:hidden">
          {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)} className="block border-b border-white/8 py-4 font-semibold text-white">{label}</Link>)}
          <Link href="/login" className="block py-4 font-semibold text-white">Login</Link>
        </nav>
      )}
    </header>
  );
}
