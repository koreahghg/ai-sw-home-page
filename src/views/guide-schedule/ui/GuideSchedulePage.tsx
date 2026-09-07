import PageHero from "@/shared/ui/PageHero";
import TimelineSection from "@/widgets/event-timeline/ui/TimelineSection";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { guideNavItems } from "@/shared/config/guide-nav";

export default function GuideSchedulePage() {
  return (
    <div>
      <PageHero title="전체 일정표" desc="2026 전남광주 AI·SW체험한마당의 일자별·시간대별 프로그램 일정을 확인하세요." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="박람회 안내" items={guideNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-gray-900">전체 일정표</h2>
          <div className="mt-4">
            <TimelineSection />
          </div>
        </div>
      </div>
    </div>
  );
}
