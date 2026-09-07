import Link from "next/link";
import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { teachersNavItems } from "@/shared/config/teachers-nav";

export default function TeachersLecturePage() {
  return (
    <div>
      <PageHero title="미래교육 특강" desc="“AI 시대의 교실”, “학교 현장의 AI 도입 사례” 등 특강 프로그램을 운영합니다." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="교사마당" items={teachersNavItems} />

        <div className="min-w-0 flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">미래교육 특강</h2>
              <p className="mt-1 text-sm text-gray-500">&ldquo;AI 시대의 교실&rdquo;, &ldquo;학교 현장의 AI 도입 사례&rdquo; 등 특강 프로그램 운영</p>
            </div>
            <Link href="/apply/teacher-lecture" className="shrink-0 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-dark">
              특강 신청하기 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
