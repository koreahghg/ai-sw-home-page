import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { guideNavItems } from "@/shared/config/guide-nav";

export default function GuideDirectionsPage() {
  return (
    <div>
      <PageHero title="오시는 길" desc="대중교통·자가용 등 행사장까지 오시는 방법을 안내합니다." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="박람회 안내" items={guideNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-gray-900">오시는 길</h2>

          <div className="mt-4 flex aspect-[16/9] w-full items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 text-sm text-gray-400">
            카카오 지도 준비중 (전남광주통합특별시교육청AI교육원)
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-brand p-5">
            <p className="text-sm font-semibold text-white">전남광주통합특별시 북구 능안로 30번길 7 (오치동 5-25)</p>
            <a
              href="https://map.kakao.com/link/search/전남광주통합특별시 북구 능안로 30번길 7"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand"
            >
              카카오맵 길찾기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
