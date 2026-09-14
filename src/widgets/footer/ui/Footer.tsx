import Link from "next/link";
import { NAV_SECTIONS } from "@/shared/config/site-nav";
import Organizer from "@/shared/ui/logos/Organizer";
import Host from "@/shared/ui/logos/Host";

const ORGANIZERS = [
  { role: "주최", Logo: Organizer },
  { role: "주관", Logo: Host },
];

const FOOTER_ONLY_LINKS: Record<string, { key: string; href: string; label: string }[]> = {
  guide: [{ key: "status", href: "/guide/status", label: "실시간 현황" }],
};

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#212121] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 border-b border-white/10 pb-10">
          {ORGANIZERS.map(({ role, Logo }) => (
            <div key={role} className="flex items-center gap-2">
              <p className="text-xs font-semibold text-white/50">{role}</p>
              <Logo className="h-5 w-auto" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 pt-10 sm:grid-cols-5">
          {NAV_SECTIONS.map((col) => (
            <div key={col.key}>
              <p className="text-sm font-bold text-white">{col.label}</p>
              <ul className="mt-3 space-y-2">
                {[...col.sub, ...(FOOTER_ONLY_LINKS[col.key] ?? [])].map((link) => (
                  <li key={link.key}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <p>주소: 전남광주통합특별시교육청AI교육원</p>
            <p>연락처: 02-0000-0000</p>
            <p>관람관련문의: 02-0000-0000</p>
          </div>
          <p className="mt-4 text-xs text-white/40">
            Copyright © 2026 전남광주특별시교육청 AI·SW체험한마당. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
