import PageHero from "@/shared/ui/PageHero";
import ExternalApplyPanel from "@/widgets/external-apply/ui/ExternalApplyPanel";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { applyNavItems } from "@/shared/config/apply-nav";
import { EXTERNAL_APPLY_LINKS } from "@/shared/config/external-apply-links";

export default function ApplyAiTourPage() {
  return (
    <div>
      <PageHero
        title="AI교육원 탐방 (오디세이 투어) 신청"
        desc="실제 AI교육원 시설을 둘러보는 견학 프로그램입니다. 10.31(토) 3개 회차, 회차별 2팀·팀당 8명 한정으로 조기 마감될 수 있습니다."
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="사전신청" items={applyNavItems} />
        <div className="min-w-0 flex-1">
          <ExternalApplyPanel
            href={EXTERNAL_APPLY_LINKS.aiTour}
            label="탐방 신청하기"
            title="AI교육원 탐방 (오디세이 투어) 신청 안내"
            tagline="AI교육원의 특별한 하루를 직접 만나보세요!"
            body={`실제 AI교육원 시설을 둘러보는 견학 프로그램으로, 아래 링크를 클릭하여 간단한 절차로 신청을 완료하실 수 있습니다.\n회차별 2팀·팀당 8명 한정으로 조기 마감될 수 있으니 서둘러 신청해 주세요!`}
          />
        </div>
      </div>
    </div>
  );
}
