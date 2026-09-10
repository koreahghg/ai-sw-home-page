"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { NAV_SECTIONS } from "@/shared/config/site-nav";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDesktopKey, setOpenDesktopKey] = useState<string | null>(null);
  const [openSeq, setOpenSeq] = useState(0);
  const openSeqRef = useRef(0);

  const openDesktopMenu = (key: string) => {
    if (openDesktopKey === null) {
      openSeqRef.current += 1;
      setOpenSeq(openSeqRef.current);
    }
    setOpenDesktopKey(key);
  };

  const closeOnHoverOut = () => {
    if (openDesktopKey && openDesktopKey !== "menu") setOpenDesktopKey(null);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 backdrop-blur transition-colors duration-300 ${
          openDesktopKey ? "bg-white" : "bg-white/70"
        }`}
        onMouseLeave={closeOnHoverOut}
        onClick={() => setOpenDesktopKey(null)}
      >
        <div className="relative flex items-center justify-between px-4 py-2.5 sm:px-6">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => {
              setOpenDesktopKey(null);
              if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image src="/lg.png" alt="2026 전남광주 AI·SW체험한마당" width={643} height={154} className="h-9 w-auto sm:h-10" priority />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {NAV_SECTIONS.map((item) => {
              const matchBase = item.matchPrefix ?? item.href;
              const active = pathname === matchBase || pathname.startsWith(matchBase + "/");
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

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center text-gray-700 transition hover:text-brand"
              onClick={(e) => {
                e.stopPropagation();
                setSearchOpen((v) => !v);
              }}
              aria-label={searchOpen ? "검색 닫기" : "검색 열기"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <circle cx="11" cy="11" r="7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21l-4.3-4.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center text-gray-700 transition hover:text-brand"
              onClick={(e) => {
                e.stopPropagation();
                if (openDesktopKey) {
                  setOpenDesktopKey(null);
                } else {
                  openDesktopMenu("menu");
                }
              }}
              aria-label={openDesktopKey ? "메뉴 닫기" : "메뉴 열기"}
            >
              {openDesktopKey ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`absolute inset-x-0 top-full overflow-hidden transition-opacity ease-out ${
            openDesktopKey ? "pointer-events-auto opacity-100 duration-200" : "pointer-events-none opacity-0 duration-500"
          }`}
        >
          <div>
            <div key={openSeq} className="grid grid-cols-2 gap-6 bg-white px-4 py-8 sm:grid-cols-3 sm:px-6 md:grid-cols-5 md:gap-8">
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

            <div className="h-100 hidden bg-gradient-to-b from-white to-white/0 md:block" onMouseEnter={closeOnHoverOut} />
          </div>
        </div>
      </header>

      <HeaderSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
