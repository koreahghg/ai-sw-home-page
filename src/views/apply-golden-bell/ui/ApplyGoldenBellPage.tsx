import PageHero from "@/shared/ui/PageHero";
import GoldenBellForm from "@/features/golden-bell-apply/ui/GoldenBellForm";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { applyNavItems } from "@/shared/config/apply-nav";

export default function ApplyGoldenBellPage() {
  return (
    <div>
      <PageHero title="AI·SW 골든벨 신청" desc="초등부와 중등부로 나누어 진행됩니다. 참가 대상에 맞게 정보를 입력해 주세요." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="사전신청" items={applyNavItems} />
        <div className="mx-auto w-full max-w-xl flex-1">
          <GoldenBellForm />
        </div>
      </div>
    </div>
  );
}
