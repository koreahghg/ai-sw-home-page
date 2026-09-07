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
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-5">
              <p className="text-sm font-semibold text-gray-800">🚗 자가용</p>
              <p className="mt-1 text-sm text-gray-500">OO컨벤션센터 지하주차장 이용 (혼잡 예상, 대중교통 권장)</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-5">
              <p className="text-sm font-semibold text-gray-800">🚇 지하철</p>
              <p className="mt-1 text-sm text-gray-500">OO역 3번 출구에서 도보 10분</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-5">
              <p className="text-sm font-semibold text-gray-800">🚌 버스</p>
              <p className="mt-1 text-sm text-gray-500">OO정류장 하차 (간선 000, 지선 0000)</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-5">
              <p className="text-sm font-semibold text-gray-800">🅿️ 주차 안내</p>
              <p className="mt-1 text-sm text-gray-500">자세한 주차 안내는 알림마당 &gt; 주차 안내에서 확인하세요.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
