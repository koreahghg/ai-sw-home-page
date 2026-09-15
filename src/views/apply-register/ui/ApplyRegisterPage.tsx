import PageHero from "@/shared/ui/PageHero";
import ExternalApplyPanel from "@/widgets/external-apply/ui/ExternalApplyPanel";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { applyNavItems } from "@/shared/config/apply-nav";
import { EXTERNAL_APPLY_LINKS } from "@/shared/config/external-apply-links";

export default function ApplyRegisterPage() {
  return (
    <div>
      <PageHero
        title="학생 사전등록"
        desc="AI·SW 한마당 방문을 위한 사전등록 입니다."
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="사전신청" items={applyNavItems} />
        <div className="min-w-0 flex-1">
          <ExternalApplyPanel
            href={EXTERNAL_APPLY_LINKS.register}
            label="학생 사전등록 신청하기"
            title="2026 전남광주 AI·SW체험한마당 사전등록 안내"
            tagline="미래 교육의 변화를 먼저 만나보세요!"
            body={`2026 전남광주 AI·SW체험한마당 사전등록을 원하신다면, 아래 링크를 클릭하여 간단한 절차로 사전등록을 완료하실 수 있습니다.\nAI·SW 교육과 기술의 최신 트렌드를 경험할 이번 기회를 놓치지 마세요!`}
          />
        </div>
      </div>
    </div>
  );
}
