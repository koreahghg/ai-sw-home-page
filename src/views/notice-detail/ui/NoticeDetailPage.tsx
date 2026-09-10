import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { noticeNavItems } from "@/shared/config/notice-nav";
import { notices } from "@/entities/notice/model/data";

export default function NoticeDetailPage({ id }: { id: string }) {
  const notice = notices.find((n) => n.id === id);

  if (!notice) {
    notFound();
  }

  const navItems = noticeNavItems.map((item) => (item.key === "notices" ? { ...item, active: true } : item));

  return (
    <div>
      <PageHero title="공지사항" desc="공지사항, 자주 묻는 질문, 주차 안내를 확인하세요." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="알림마당" items={navItems} />

        <div className="min-w-0 flex-1">
          <Link href="/notice" className="text-sm font-medium text-gray-500 hover:text-gray-700">
            ← 목록으로
          </Link>

          <h2 className="mt-4 text-lg font-bold text-gray-900">{notice.title}</h2>
          <p className="mt-1 text-xs text-gray-400">{notice.date}</p>
          <div className="mt-6 space-y-3 border-t border-gray-100 pt-6 text-sm leading-relaxed text-gray-700">
            {notice.content.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          {notice.attachments && notice.attachments.length > 0 && (
            <div className="mt-8 border-t border-gray-100 pt-6">
              <p className="text-sm font-semibold text-gray-800">첨부파일</p>
              <ul className="mt-3 space-y-2">
                {notice.attachments.map((file) => (
                  <li key={file.name}>
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-xl bg-gray-100 px-4 py-3 transition-colors hover:bg-gray-200"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center text-brand">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.44 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3.5 3.5 0 014.95 4.95l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"
                          />
                        </svg>
                      </span>
                      <span className="min-w-0 truncate text-sm font-medium text-gray-800">{file.name}</span>
                      <span className="shrink-0 text-xs text-gray-400">{file.size}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
