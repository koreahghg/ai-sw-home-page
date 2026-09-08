import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { guideNavItems } from "@/shared/config/guide-nav";
import PosterPreview from "./PosterPreview";

const OVERVIEW = [
  { label: "행사명", value: "2026 전남광주통합특별시교육청 AI·SW체험한마당" },
  { label: "주제", value: "AI로 연결하고, 미래를 열다 (예정)" },
  { label: "일정", value: "2026. 10. 31.(토) 9:30 ~ 17:00 / 11. 1.(일) 9:30 ~ 16:00 (행사장 개장 9:00 예정)" },
  { label: "장소", value: "전남광주통합특별시교육청AI교육원 일원 (주차장 야외 부스 포함)" },
  { label: "대상", value: "관내 초‧중‧고‧특수학교 학생, 교직원, 학부모, 일반시민 등" },
  { label: "주최", value: "전남광주통합특별시교육청" },
  { label: "주관", value: "전남광주통합특별시교육청AI교육원" },
];

export default function GuideOverviewPage() {
  return (
    <div>
      <PageHero title="행사 개요" desc="행사 개요부터 오시는 길까지, 2026 전남광주통합특별시교육청 AI·SW체험한마당의 모든 기본 정보를 확인하세요." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="박람회 안내" items={guideNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-gray-900">행사 개요</h2>
          <div className="mt-4 flex flex-col gap-6 sm:flex-row">
            <PosterPreview />
            <dl className="flex-1 divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-100 bg-white">
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
    </div>
  );
}
