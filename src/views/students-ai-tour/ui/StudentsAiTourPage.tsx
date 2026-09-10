import Link from "next/link";
import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { studentsNavItems } from "@/shared/config/students-nav";

export default function StudentsAiTourPage() {
  return (
    <div>
      <PageHero
        title="AI교육원 탐방 (오디세이 투어)"
        desc="실제 AI교육원 시설을 둘러보는 견학 프로그램입니다. 10.31(토) 3개 회차로 운영되며 회차별 2팀, 팀당 8명 한정입니다."
      />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="학생마당" items={studentsNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-gray-900">AI교육원 탐방 (오디세이 투어)</h2>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4">
              <span className="shrink-0 rounded-full bg-gray-900 px-3 py-1.5 text-xs font-bold text-white">1회차</span>
              <p className="text-sm font-semibold text-gray-800">
                10.31(토) <span className="text-brand">10:00~11:00</span>
              </p>
            </div>
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4">
              <span className="shrink-0 rounded-full bg-gray-900 px-3 py-1.5 text-xs font-bold text-white">2회차</span>
              <p className="text-sm font-semibold text-gray-800">
                10.31(토) <span className="text-brand">13:30~14:30</span>
              </p>
            </div>
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4">
              <span className="shrink-0 rounded-full bg-gray-900 px-3 py-1.5 text-xs font-bold text-white">3회차</span>
              <p className="text-sm font-semibold text-gray-800">
                10.31(토) <span className="text-brand">15:00~16:00</span>
              </p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5">
              <span className="flex shrink-0 items-center justify-center rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-white">대상</span>
              <p className="text-sm text-gray-700">학생 (팀 단위 신청, 회차별 2팀 · 팀당 8명)</p>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5">
              <span className="flex shrink-0 items-center justify-center rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-white">장소</span>
              <p className="text-sm text-gray-700">AI교육원 일원</p>
            </div>
          </div>

          <div className="mt-3 space-y-3 rounded-2xl border border-gray-100 bg-white p-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">내용</span>
              <p className="text-sm text-gray-700">AI교육원 시설 견학 및 AI 체험 프로그램</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">운영방식</span>
              <p className="text-sm text-gray-700">회차별 2팀 한정 사전신청, 팀당 8명 참여 가능</p>
            </div>
          </div>

          <Link
            href="/apply/ai-tour"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark"
          >
            탐방 신청하기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
