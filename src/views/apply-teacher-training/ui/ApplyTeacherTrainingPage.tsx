import PageHero from "@/shared/ui/PageHero";
import TeacherTrainingForm from "@/features/teacher-training-apply/ui/TeacherTrainingForm";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { applyNavItems } from "@/shared/config/apply-nav";

export default function ApplyTeacherTrainingPage() {
  return (
    <div>
      <PageHero title="교사 연수 신청" desc="1인당 최대 2개 프로그램까지 신청 가능합니다. 프로그램별 정원 마감 시 자동으로 선택이 제한됩니다." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="사전신청" items={applyNavItems} />
        <div className="mx-auto w-full max-w-xl flex-1">
          <TeacherTrainingForm />
        </div>
      </div>
    </div>
  );
}
