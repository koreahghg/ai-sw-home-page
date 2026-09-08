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

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-5">
              <p className="text-sm font-semibold text-gray-800">🚌 버스 이용 시</p>
              <ul className="mt-2 space-y-1.5 text-sm text-gray-500">
                <li>간선버스 000, 000번 · AI교육원 정류장 하차 후 도보 5분</li>
                <li>지선버스 0000, 0000번 · AI교육원 정류장 하차 후 도보 5분</li>
                <li>행사 기간 중 셔틀버스 운영 예정 (별도 공지)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-5">
              <p className="text-sm font-semibold text-gray-800">🚇 지하철 이용 시</p>
              <ul className="mt-2 space-y-1.5 text-sm text-gray-500">
                <li>OO역 3번 출구에서 도보 10분</li>
                <li>OO역 환승, 마을버스 000번 이용 시 도보 2분</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-5">
              <p className="text-sm font-semibold text-gray-800">🚗 자가용</p>
              <p className="mt-1 text-sm text-gray-500">전남광주통합특별시교육청AI교육원 주차장 이용 (혼잡 예상, 대중교통 권장)</p>
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
