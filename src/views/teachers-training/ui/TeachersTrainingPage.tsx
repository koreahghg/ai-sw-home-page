import Link from "next/link";
import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { teachersNavItems } from "@/shared/config/teachers-nav";
import { trainingPrograms } from "@/entities/training-program/model/data";

export default function TeachersTrainingPage() {
  return (
    <div>
      <PageHero title="교사 연수" desc="현직 교원을 위한 연수 프로그램입니다. 프로그램별 정원이 한정되어 있습니다." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="교사마당" items={teachersNavItems} />

        <div className="min-w-0 flex-1 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 p-6 text-white sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-lg font-bold">교사 연수 (3개 프로그램)</h2>
            <Link href="/apply/teacher-training" className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-violet-700 hover:bg-violet-50">
              연수 신청하기 →
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {trainingPrograms.map((t) => (
              <div key={t.id} className="rounded-xl bg-white/10 p-4 ring-1 ring-inset ring-white/20">
                <p className="text-sm font-bold">{t.title}</p>
                <p className="mt-1 text-xs text-violet-100">{t.desc}</p>
                <p className="mt-2 text-xs font-semibold text-white">{t.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
