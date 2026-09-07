import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { noticeNavItems } from "@/shared/config/notice-nav";

export default function NoticeParkingPage() {
  return (
    <div>
      <PageHero title="주차 안내" desc="행사장 주차 안내를 확인하세요." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="알림마당" items={noticeNavItems} />

        <div className="min-w-0 flex-1 rounded-2xl border border-gray-100 bg-white p-6">
          <p className="text-sm font-bold text-gray-900">🅿️ OO컨벤션센터 지하주차장</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-500">
            <li>• 행사 기간 중 주차 공간이 한정되어 있어 대중교통 이용을 강력히 권장합니다.</li>
            <li>• 사전등록 시 발급되는 QR코드를 제시하면 2시간 무료 주차가 제공됩니다.</li>
            <li>• 장애인 및 임산부 우선 주차 구역이 지하 1층에 별도 마련되어 있습니다.</li>
            <li>• 만차 시 인근 공영주차장(도보 5분) 이용을 안내해 드립니다.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
