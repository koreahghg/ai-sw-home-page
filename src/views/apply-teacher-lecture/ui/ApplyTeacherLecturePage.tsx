import PageHero from "@/shared/ui/PageHero";
import TeacherLectureForm from "@/features/teacher-lecture-apply/ui/TeacherLectureForm";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { applyNavItems } from "@/shared/config/apply-nav";

export default function ApplyTeacherLecturePage() {
  return (
    <div>
      <PageHero title="미래교육 특강 신청" desc="AI 시대 교실을 위한 교원 대상 특강입니다. 회차별 정원이 있어 조기 마감될 수 있습니다." />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="사전신청" items={applyNavItems} />
        <div className="mx-auto w-full max-w-xl flex-1">
          <TeacherLectureForm />
        </div>
      </div>
    </div>
  );
}
