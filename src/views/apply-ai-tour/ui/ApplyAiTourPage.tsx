import PageHero from "@/shared/ui/PageHero";
import AiTourForm from "@/features/ai-tour-apply/ui/AiTourForm";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { applyNavItems } from "@/shared/config/apply-nav";

export default function ApplyAiTourPage() {
  return (
    <div>
      <PageHero
        title="AI교육원 탐방 (오디세이 투어) 신청"
        desc="실제 AI교육원 시설을 둘러보는 견학 프로그램입니다. 10.31(토) 3개 회차, 회차별 2팀·팀당 8명 한정으로 조기 마감될 수 있습니다."
      />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="사전신청" items={applyNavItems} />
        <div className="mx-auto w-full max-w-xl flex-1">
          <AiTourForm />
        </div>
      </div>
    </div>
  );
}
