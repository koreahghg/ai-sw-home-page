import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { noticeNavItems } from "@/shared/config/notice-nav";
import { faqs } from "@/entities/faq/model/data";

export default function NoticeFaqPage() {
  return (
    <div>
      <PageHero title="FAQ" desc="자주 묻는 질문을 확인하세요." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="알림마당" items={noticeNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-gray-900">FAQ</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-gray-100 bg-white p-5 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                  <span className="flex items-center gap-2">
                    <span className="rounded bg-brand-light px-1.5 py-0.5 text-[10px] font-bold text-brand">{f.category}</span>
                    <span className="text-sm font-semibold text-gray-800">{f.q}</span>
                  </span>
                  <span className="shrink-0 text-gray-300 transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
