import PageHero from "@/shared/ui/PageHero";
import ApplyLookupForm from "@/features/apply-lookup/ui/ApplyLookupForm";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { applyNavItems } from "@/shared/config/apply-nav";

export default function ApplyCheckPage() {
  return (
    <div>
      <PageHero title="신청 내역 조회 · 취소" desc="신청 시 등록한 휴대폰 번호로 나의 모든 신청 내역을 확인하고 취소할 수 있습니다." />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="사전신청" items={applyNavItems} />
        <div className="mx-auto w-full max-w-xl flex-1">
          <ApplyLookupForm />
        </div>
      </div>
    </div>
  );
}
