import Link from "next/link";
import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { noticeNavItems } from "@/shared/config/notice-nav";
import { notices } from "@/entities/notice/model/data";

const PAGE_SIZE = 10;

export default function NoticePage({ page }: { page: number }) {
  const totalPages = Math.max(1, Math.ceil(notices.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, page || 1), totalPages);
  const pageItems = notices.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div>
      <PageHero title="공지사항" desc="공지사항, 자주 묻는 질문, 주차장 안내를 확인하세요." />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="알림마당" items={noticeNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-gray-900">공지사항</h2>
          <div className="mt-4 flex flex-col divide-y divide-gray-100">
            {pageItems.map((n) => (
              <Link key={n.id} href={`/notice/${n.id}`} className="flex gap-6 rounded-lg px-3 py-5 transition-colors hover:bg-gray-100">
                <span className="w-24 shrink-0 text-sm font-medium text-brand">{n.date}</span>
                <div className="min-w-0">
                  <p className="font-bold text-gray-900">{n.title}</p>
                  <p className="mt-1 truncate text-sm text-gray-400">{n.content.join(" ")}</p>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-6 flex items-center justify-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={p === 1 ? "/notice" : `/notice?page=${p}`}
                  className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${
                    p === currentPage ? "bg-brand text-white" : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {p}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
