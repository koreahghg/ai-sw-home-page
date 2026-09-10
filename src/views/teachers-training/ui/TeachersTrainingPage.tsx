import Link from "next/link";
import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { teachersNavItems } from "@/shared/config/teachers-nav";
import { trainingPrograms } from "@/entities/training-program/model/data";

export default function TeachersTrainingPage() {
  return (
    <div>
      <PageHero title="교사 연수" desc="현직 교원을 위한 연수 프로그램입니다. 삼성·애플·구글 3개 세션으로 운영되며 세부 일정은 추후 안내됩니다." />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="교사마당 (미래교육)" items={teachersNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-gray-900">교사 연수</h2>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            {trainingPrograms.map((t) => (
              <div key={t.id} className="flex flex-1 items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4">
                <span className="shrink-0 rounded-full bg-gray-900 px-3 py-1.5 text-xs font-bold text-white">{t.title}</span>
                <p className="text-sm font-semibold text-gray-800">{t.time}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5">
              <span className="flex shrink-0 items-center justify-center rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-white">대상</span>
              <p className="text-sm text-gray-700">현직 교원 (1인당 최대 2개 세션 신청)</p>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5">
              <span className="flex shrink-0 items-center justify-center rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-white">장소</span>
              <p className="text-sm text-gray-700">장소 추후 안내</p>
            </div>
          </div>

          <div className="mt-3 space-y-3 rounded-2xl border border-gray-100 bg-white p-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">내용</span>
              <p className="text-sm text-gray-700">삼성·애플·구글과 함께하는 교원 대상 협력 연수 프로그램</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">운영방식</span>
              <p className="text-sm text-gray-700">세션별 정원 한정, 세부 일정은 홈페이지를 통해 추후 공지</p>
            </div>
          </div>

          <Link
            href="/apply/teacher-training"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark"
          >
            연수 신청하기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
