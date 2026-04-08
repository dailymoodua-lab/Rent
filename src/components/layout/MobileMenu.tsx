"use client";

import { useState } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

export default function MobileMenu({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Открыть меню"
        className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 transition-colors"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-16 z-50 border-b border-slate-100 bg-white shadow-lg">
          <nav className="flex flex-col px-4 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-50 py-3 text-sm font-medium text-slate-700 hover:text-brand-600"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+48000000000"
              className="py-3 text-sm font-semibold text-slate-800"
            >
              +48 000 000 000
            </a>
            <Link
              href="/catalog"
              onClick={() => setOpen(false)}
              className="mb-2 mt-1 rounded-xl bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Забронировать
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
