import PageHero from "@/shared/ui/PageHero";
import ExternalApplyPanel from "@/widgets/external-apply/ui/ExternalApplyPanel";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { applyNavItems } from "@/shared/config/apply-nav";
import { EXTERNAL_APPLY_LINKS } from "@/shared/config/external-apply-links";

export default function ApplyGoldenBellPage() {
  return (
    <div>
      <PageHero title="AI·SW 골든벨 신청" desc="초등부와 중등부로 나누어 진행됩니다. 참가 대상에 맞게 정보를 입력해 주세요." />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="사전신청" items={applyNavItems} />
        <div className="min-w-0 flex-1">
          <ExternalApplyPanel
            href={EXTERNAL_APPLY_LINKS.goldenBell}
            label="골든벨 신청하기"
            title="2026 전남광주 AI·SW체험한마당 골든벨 신청 안내"
            tagline="실력을 겨루고 우승의 주인공이 되어보세요!"
            body={`AI·SW 골든벨은 초등부·중등부로 나뉘어 진행되며, 참가를 원하시면 아래 링크를 클릭해 간단한 절차로 신청을 완료하실 수 있습니다.\n정원이 한정되어 있으니 서둘러 신청해 주세요!`}
          />
        </div>
      </div>
    </div>
  );
}
