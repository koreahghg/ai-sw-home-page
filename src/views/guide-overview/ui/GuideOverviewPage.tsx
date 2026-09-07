import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { guideNavItems } from "@/shared/config/guide-nav";

const OVERVIEW = [
  { label: "행사명", value: "2026 AI미래교육박람회" },
  { label: "일시", value: "2026. 10. 31.(금) - 11. 1.(토), 09:30 ~ 17:00" },
  { label: "장소", value: "OO컨벤션센터 (1층 · 2층 전시장, 강당)" },
  { label: "대상", value: "학생·학부모(AI·SW 한마당) / 전국 유·초·중등 교원(미래교육박람회)" },
  { label: "주최·주관", value: "2026 AI미래교육박람회 조직위원회" },
];

export default function GuideOverviewPage() {
  return (
    <div>
      <PageHero title="박람회 안내" desc="행사 개요부터 오시는 길까지, 2026 AI미래교육박람회의 모든 기본 정보를 확인하세요." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="박람회 안내" items={guideNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-gray-900">행사 개요</h2>
          <dl className="mt-4 divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-100 bg-white">
            {OVERVIEW.map((row) => (
              <div key={row.label} className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[140px_1fr] sm:gap-4">
                <dt className="text-sm font-semibold text-gray-500">{row.label}</dt>
                <dd className="text-sm text-gray-800">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
