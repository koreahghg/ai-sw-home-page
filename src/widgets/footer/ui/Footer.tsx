import Image from "next/image";
import Link from "next/link";
import { NAV_SECTIONS } from "@/shared/config/site-nav";

const ORGANIZERS = [
  { role: "주최", name: "전남광주통합특별시교육청", logo: "/logos/organizer.svg" },
  { role: "주관", name: "전남광주통합특별시교육청AI교육원", logo: "/logos/host.svg" },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#212121] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap gap-8 border-b border-white/10 pb-10">
          {ORGANIZERS.map((org) => (
            <div key={org.role} className="flex items-center gap-3">
              <Image src={org.logo} alt={`${org.role} ${org.name} 로고`} width={40} height={40} className="h-10 w-10" />
              <div>
                <p className="text-xs font-semibold text-white/50">{org.role}</p>
                <p className="text-sm font-semibold text-white">{org.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 pt-10 sm:grid-cols-5">
          {NAV_SECTIONS.map((col) => (
            <div key={col.key}>
              <p className="text-sm font-bold text-white">{col.label}</p>
              <ul className="mt-3 space-y-2">
                {col.sub.map((link) => (
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

        <div className="mt-10 border-t border-white/10 pt-8 text-sm text-white/60">
          <p className="font-semibold text-white">2026 전남광주 AI·SW체험한마당 사무국</p>
          <p className="mt-2 leading-relaxed">
            문의: 02-0000-0000 (평일 09:00~18:00)
            <br />
            장소: 전남광주통합특별시교육청AI교육원 &nbsp;|&nbsp; 일시: 2026.10.31.(토) ~ 11.1.(일)
          </p>
          <p className="mt-4 text-xs text-white/40">
            © 2026 전남광주 AI·SW체험한마당. 본 사이트는 프로토타입이며 실제 신청 데이터를 저장하지 않습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
