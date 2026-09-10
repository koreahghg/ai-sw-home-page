import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { guideNavItems } from "@/shared/config/guide-nav";

export default function GuideMapPage() {
  return (
    <div>
      <PageHero title="부스 배치도" desc="전시장 층별 부스 위치와 체험존 배치를 확인하세요." />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="박람회 안내" items={guideNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-gray-900">부스 배치도</h2>
          <div className="mt-4 flex h-72 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white text-sm text-gray-400 sm:h-96">
            부스 배치도 이미지 영역 (추후 삽입 예정)
          </div>
        </div>
      </div>
    </div>
  );
}
