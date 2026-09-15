"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { NAV_SECTIONS } from "@/shared/config/site-nav";
import { CONGESTION_STYLE } from "@/entities/congestion/model/data";
import { parkingCongestionLevel } from "@/entities/parking/model/data";
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
        <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            onClick={() => {
              setOpenDesktopKey(null);
              if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image src="/lg.png" alt="2026 전남광주통합특별시교육청 AI미래교육박람회" width={643} height={154} className="h-8 w-auto sm:h-9" priority />
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 md:flex">
            {NAV_SECTIONS.map((item) => {
              const matchBase = item.matchPrefix ?? item.href;
              const active = pathname === matchBase || pathname.startsWith(matchBase + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => openDesktopMenu(item.key)}
                  className={`block rounded-full px-2 py-1.5 text-sm font-medium transition duration-300 ${
                    active ? "text-gray-900 font-semibold" : "text-gray-600 hover:text-gray-900 hover:font-semibold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <span className="hidden shrink-0 items-center gap-5 xl:flex">
              <a
                href="/parking"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setOpenDesktopKey(null)}
                className="shrink-0 whitespace-nowrap rounded-full px-2 py-1.5 text-sm font-medium text-gray-600 transition duration-300 hover:text-gray-900 hover:font-semibold"
              >
                주차장 안내
              </a>

              <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500">
                혼잡도
                <span className={`h-2 w-2 shrink-0 rounded-full ${CONGESTION_STYLE[parkingCongestionLevel].dot}`} />
                <span className={`font-semibold ${CONGESTION_STYLE[parkingCongestionLevel].text}`}>{parkingCongestionLevel}</span>
              </span>
            </span>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-gray-700 transition hover:text-brand"
              onClick={(e) => {
                e.stopPropagation();
                setSearchOpen((v) => !v);
              }}
              aria-label={searchOpen ? "검색 닫기" : "검색 열기"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <circle cx="11" cy="11" r="7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21l-4.3-4.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-gray-700 transition hover:text-brand"
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
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
            <div className="bg-white">
              {openDesktopKey === "menu" ? (
                <div key={openSeq} className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 md:grid-cols-5 md:gap-8">
                  {NAV_SECTIONS.map((section) => (
                    <div key={section.key}>
                      <p className="text-xs font-medium text-gray-400">{section.label}</p>
                      <ul className="mt-4 flex flex-col gap-1">
                        {section.sub.map((s, i) => (
                          <li key={s.key} className="animate-[nav-item-in_0.5s_ease-out_both]" style={{ animationDelay: `${i * 40}ms` }}>
                            <Link
                              href={s.href}
                              onClick={() => setOpenDesktopKey(null)}
                              className="block text-sm font-semibold text-gray-800 transition hover:text-brand"
                            >
                              {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div>
                    <p className="text-xs font-medium text-gray-400">주차장 안내</p>
                    <ul className="mt-4 flex flex-col gap-1">
                      <li className="animate-[nav-item-in_0.5s_ease-out_both]">
                        <a
                          href="/parking"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setOpenDesktopKey(null)}
                          className="block text-sm font-semibold text-gray-800 transition hover:text-brand"
                        >
                          혼잡도: {parkingCongestionLevel}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div
                  key={openSeq}
                  className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-6 px-4 py-8 sm:grid-cols-3 sm:px-6 md:grid-cols-4"
                >
                  {NAV_SECTIONS.find((section) => section.key === openDesktopKey)?.sub.map((s) => (
                    <Link
                      key={`${openDesktopKey}-${s.key}`}
                      href={s.href}
                      onClick={() => setOpenDesktopKey(null)}
                      className="group block animate-[nav-item-in_0.5s_ease-out_both]"
                    >
                      <p className="border-b border-gray-200 pb-2 text-base font-bold text-gray-900 transition group-hover:border-brand group-hover:text-brand">
                        {s.label}
                      </p>
                      {s.desc && <p className="mt-2 text-sm text-gray-500">{s.desc}</p>}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="h-100 hidden bg-gradient-to-b from-white to-white/0 md:block" onMouseEnter={closeOnHoverOut} />
          </div>
        </div>
      </header>

      <HeaderSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
