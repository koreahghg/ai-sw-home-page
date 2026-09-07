import Link from "next/link";
import { NAV_SECTIONS } from "@/shared/config/site-nav";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
          {NAV_SECTIONS.map((col) => (
            <div key={col.key}>
              <p className="text-sm font-bold text-gray-900">{col.label}</p>
              <ul className="mt-3 space-y-2">
                {col.sub.map((link) => (
                  <li key={link.key}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-brand">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-gray-100 pt-8 text-sm text-gray-500">
          <p className="font-semibold text-gray-700">2026 AI미래교육박람회 사무국</p>
          <p className="mt-2 leading-relaxed">
            주최 · 주관: 2026 AI미래교육박람회 조직위원회 &nbsp;|&nbsp; 문의: 02-0000-0000 (평일 09:00~18:00)
            <br />
            장소: OO컨벤션센터 &nbsp;|&nbsp; 일시: 2026.10.31.(금) ~ 11.1.(토)
          </p>
          <p className="mt-4 text-xs text-gray-400">
            © 2026 AI미래교육박람회. 본 사이트는 프로토타입이며 실제 신청 데이터를 저장하지 않습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
