
"use client";

import Link from "next/link";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Biography", "#biography"],
  ["Education", "#education"],
  ["Experience", "#experience"],
  ["Achievements", "#achievements"],
  ["Publications", "#publications"],
  ["Contact", "#contact"],
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="absolute left-0 top-full w-full border-t border-slate-200 bg-white p-5 shadow-xl lg:hidden">
      <nav className="flex flex-col gap-4">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className="font-medium text-slate-700 transition hover:text-amber-600"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
