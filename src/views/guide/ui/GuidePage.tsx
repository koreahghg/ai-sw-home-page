import PageHero from "@/shared/ui/PageHero";
import TimelineSection from "@/widgets/event-timeline/ui/TimelineSection";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";

const SECTIONS = [
  { key: "overview", href: "#overview", label: "행사 개요" },
  { key: "schedule", href: "#schedule", label: "전체 일정표" },
  { key: "map", href: "#map", label: "부스 배치도" },
  { key: "directions", href: "#directions", label: "오시는 길" },
];

const OVERVIEW = [
  { label: "행사명", value: "2026 AI미래교육박람회" },
  { label: "일시", value: "2026. 10. 31.(금) - 11. 1.(토), 09:30 ~ 17:00" },
  { label: "장소", value: "OO컨벤션센터 (1층 · 2층 전시장, 강당)" },
  { label: "대상", value: "학생·학부모(AI·SW 한마당) / 전국 유·초·중등 교원(미래교육박람회)" },
  { label: "주최·주관", value: "2026 AI미래교육박람회 조직위원회" },
];

export default function GuidePage() {
  return (
    <div>
      <PageHero title="박람회 안내" desc="행사 개요부터 오시는 길까지, 2026 AI미래교육박람회의 모든 기본 정보를 확인하세요." />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="박람회 안내" items={SECTIONS} />

        <div className="min-w-0 flex-1 space-y-14">
          <section id="overview" className="scroll-mt-24">
            <h2 className="text-lg font-bold text-gray-900">행사 개요</h2>
            <dl className="mt-4 divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-100 bg-white">
              {OVERVIEW.map((row) => (
                <div key={row.label} className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[140px_1fr] sm:gap-4">
                  <dt className="text-sm font-semibold text-gray-500">{row.label}</dt>
                  <dd className="text-sm text-gray-800">{row.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="schedule" className="scroll-mt-24">
            <h2 className="text-lg font-bold text-gray-900">전체 일정표</h2>
            <div className="mt-4">
              <TimelineSection />
            </div>
          </section>

          <section id="map" className="scroll-mt-24">
            <h2 className="text-lg font-bold text-gray-900">부스 배치도</h2>
            <div className="mt-4 flex h-72 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white text-sm text-gray-400 sm:h-96">
              부스 배치도 이미지 영역 (추후 삽입 예정)
            </div>
          </section>

          <section id="directions" className="scroll-mt-24">
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
          </section>
        </div>
      </div>
    </div>
  );
}
