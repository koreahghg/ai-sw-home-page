import Link from "next/link";
import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { trainingPrograms } from "@/entities/training-program/model/data";

const BOOTHS = [
  { title: "AI 디지털교과서 체험존", desc: "실제 수업에 활용 가능한 AI 디지털교과서 시연" },
  { title: "에듀테크 솔루션관", desc: "학습 분석·평가 도구 등 최신 에듀테크 전시" },
  { title: "교육 정책 상담 부스", desc: "미래교육 정책 관련 1:1 상담" },
];

const SECTIONS = [
  { key: "booths", href: "#booths", label: "부스 안내" },
  { key: "training", href: "#training", label: "교사 연수" },
  { key: "lecture", href: "#lecture", label: "미래교육 특강" },
];

export default function TeachersPage() {
  return (
    <div>
      <PageHero title="교사마당" desc="미래교육박람회 - 교원을 위한 부스 전시, 연수, 특강 프로그램을 확인하세요." />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="교사마당" items={SECTIONS} />

        <div className="min-w-0 flex-1 space-y-14">
          <section id="booths" className="scroll-mt-24">
            <h2 className="text-lg font-bold text-gray-900">부스 안내</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {BOOTHS.map((b) => (
                <div key={b.title} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <p className="text-sm font-bold text-gray-900">{b.title}</p>
                  <p className="mt-2 text-sm text-gray-500">{b.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="training" className="scroll-mt-24 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 p-6 text-white sm:p-8">
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
          </section>

          <section id="lecture" className="scroll-mt-24 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900">미래교육 특강</h2>
                <p className="mt-1 text-sm text-gray-500">&ldquo;AI 시대의 교실&rdquo;, &ldquo;학교 현장의 AI 도입 사례&rdquo; 등 특강 프로그램 운영</p>
              </div>
              <Link href="/apply/teacher-lecture" className="shrink-0 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-dark">
                특강 신청하기 →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
