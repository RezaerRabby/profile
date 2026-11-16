
"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Education", "#education"],
  ["Experience", "#experience"],
  ["Achievements", "#achievements"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-5">
        <Link href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-900 text-xl font-bold text-amber-400">
            Abu
          </div>

          <div>
            <p className="font-bold text-slate-900">Abu</p>
            <p className="text-xs text-slate-500">ES</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-slate-700 transition hover:text-amber-600"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600 lg:block"
        >
          Contact Me
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-md border border-slate-300 px-3 py-2 text-xl text-slate-800 lg:hidden"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
