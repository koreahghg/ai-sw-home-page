"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { NAV_SECTIONS } from "@/shared/config/site-nav";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openDesktopKey, setOpenDesktopKey] = useState<string | null>(null);
  const [openMobileKey, setOpenMobileKey] = useState<string | null>(null);
  const [openSeq, setOpenSeq] = useState(0);
  const openSeqRef = useRef(0);

  const closeMobileMenu = () => {
    setOpen(false);
    setOpenMobileKey(null);
  };

  const openDesktopMenu = (key: string) => {
    if (openDesktopKey === null) {
      openSeqRef.current += 1;
      setOpenSeq(openSeqRef.current);
    }
    setOpenDesktopKey(key);
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur transition-colors duration-300 ${
        openDesktopKey ? "bg-white" : "bg-white/70"
      }`}
      onMouseLeave={() => setOpenDesktopKey(null)}
      onClick={() => setOpenDesktopKey(null)}
    >
      <div className="relative flex items-center justify-between px-4 py-2.5 sm:px-6">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => {
            closeMobileMenu();
            if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image src="/lg.png" alt="2026 전남광주 AI·SW체험한마당" width={643} height={154} className="h-9 w-auto sm:h-10" priority />
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_SECTIONS.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => openDesktopMenu(item.key)}
                  className={`block rounded-full px-2 py-1.5 text-base font-medium transition duration-300 ${
                    active ? "text-gray-900 font-semibold" : "text-gray-600 hover:text-gray-900 hover:font-semibold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-600 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="메뉴 열기"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      <div
        className={`absolute inset-x-0 top-full hidden overflow-hidden transition-opacity ease-out md:block ${
          openDesktopKey ? "pointer-events-auto opacity-100 duration-200" : "pointer-events-none opacity-0 duration-500"
        }`}
      >
        <div className="shadow-[0_24px_48px_-24px_rgba(15,23,42,0.16)]">
          <div key={openSeq} className="grid grid-cols-5 gap-8 bg-white px-4 py-8 sm:px-6">
            {NAV_SECTIONS.map((section) => (
              <div key={section.key}>
                <p className="text-sm font-medium text-gray-400">{section.label}</p>
                <ul className="mt-4 flex flex-col gap-1">
                  {section.sub.map((s, i) => (
                    <li key={s.key} className="animate-[nav-item-in_0.5s_ease-out_both]" style={{ animationDelay: `${i * 40}ms` }}>
                      <Link
                        href={s.href}
                        onClick={() => setOpenDesktopKey(null)}
                        className="block text-base font-semibold text-gray-800 transition hover:text-brand"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="h-100 bg-gradient-to-b from-white to-white/0" onMouseEnter={() => setOpenDesktopKey(null)} />
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black/5 bg-white px-4 py-3 md:hidden">
          {NAV_SECTIONS.map((item) => {
            const expanded = openMobileKey === item.key;
            return (
              <div key={item.href}>
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="flex-1 rounded-lg px-4 py-2.5 text-base font-medium text-gray-700 hover:text-gray-900 hover:font-semibold"
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setOpenMobileKey(expanded ? null : item.key)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center text-gray-400"
                    aria-label={`${item.label} 하위 메뉴 ${expanded ? "닫기" : "열기"}`}
                  >
                    <span className={`inline-block transition-transform ${expanded ? "rotate-180" : ""}`}>⌄</span>
                  </button>
                </div>

                {expanded && (
                  <ul className="ml-2 border-l border-gray-100 pl-3">
                    {item.sub.map((s) => (
                      <li key={s.key}>
                        <Link
                          href={s.href}
                          onClick={closeMobileMenu}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-brand"
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      )}
    </header>
  );
}
