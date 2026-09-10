import PageHero from "@/shared/ui/PageHero";
import TeacherTrainingForm from "@/features/teacher-training-apply/ui/TeacherTrainingForm";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { applyNavItems } from "@/shared/config/apply-nav";

export default function ApplyTeacherTrainingPage() {
  return (
    <div>
      <PageHero title="교사 연수 신청" desc="삼성·애플·구글 3개 세션 중 최대 2개까지 신청 가능합니다. 세션별 세부 일정은 추후 안내될 예정입니다." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="사전신청" items={applyNavItems} />
        <div className="mx-auto w-full max-w-xl flex-1">
          <TeacherTrainingForm />
        </div>
      </div>
    </div>
  );
}
