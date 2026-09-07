import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { noticeNavItems } from "@/shared/config/notice-nav";
import { notices } from "@/entities/notice/model/data";

export default function NoticePage() {
  return (
    <div>
      <PageHero title="알림마당" desc="공지사항, 자주 묻는 질문, 주차 안내를 확인하세요." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="알림마당" items={noticeNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-gray-900">공지사항</h2>
          <div className="mt-4 divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-100 bg-white">
            {notices.map((n) => (
              <div key={n.id} className="flex items-center justify-between gap-3 px-5 py-4">
                <div className="flex items-center gap-2 min-w-0">
                  {n.pinned && (
                    <span className="shrink-0 rounded bg-rose-50 px-1.5 py-0.5 text-[10px] font-bold text-rose-600">필독</span>
                  )}
                  <p className="truncate text-sm font-medium text-gray-800">{n.title}</p>
                </div>
                <span className="shrink-0 text-xs text-gray-400">{n.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
