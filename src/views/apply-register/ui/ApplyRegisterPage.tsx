import PageHero from "@/shared/ui/PageHero";
import StudentRegisterForm from "@/features/student-register/ui/StudentRegisterForm";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { applyNavItems } from "@/shared/config/apply-nav";

export default function ApplyRegisterPage() {
  return (
    <div>
      <PageHero title="학생 사전등록" desc="AI·SW 한마당 방문을 위한 사전등록 - 보호자 1인 기준 최대 5명까지 함께 등록할 수 있습니다." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="사전신청" items={applyNavItems} />
        <div className="mx-auto w-full max-w-xl flex-1">
          <StudentRegisterForm />
        </div>
      </div>
    </div>
  );
}
