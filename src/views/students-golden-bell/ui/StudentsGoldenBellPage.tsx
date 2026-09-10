import Link from "next/link";
import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { studentsNavItems } from "@/shared/config/students-nav";

export default function StudentsGoldenBellPage() {
  return (
    <div>
      <PageHero title="AI·SW 골든벨" desc="초등부 · 중등부로 나누어 진행되는 퀴즈 배틀. 우승팀에게는 상품이 제공됩니다." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="학생마당" items={studentsNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-gray-900">AI·SW 골든벨</h2>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4">
              <span className="shrink-0 rounded-full bg-gray-900 px-3 py-1.5 text-xs font-bold text-white">초등일시</span>
              <p className="text-sm font-semibold text-gray-800">
                10.31(토) <span className="text-brand">13:30~14:30</span>
              </p>
            </div>
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4">
              <span className="shrink-0 rounded-full bg-gray-900 px-3 py-1.5 text-xs font-bold text-white">중고등일시</span>
              <p className="text-sm font-semibold text-gray-800">
                11.1(일) <span className="text-brand">11:00~12:00</span>
              </p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5">
              <span className="flex shrink-0 items-center justify-center rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-white">대상</span>
              <p className="text-sm text-gray-700">초·중·고 희망학생 (초등부·중고등부 각 50명)</p>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5">
              <span className="flex shrink-0 items-center justify-center rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-white">장소</span>
              <p className="text-sm text-gray-700">3층 대강당</p>
            </div>
          </div>

          <div className="mt-3 space-y-3 rounded-2xl border border-gray-100 bg-white p-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">내용</span>
              <p className="text-sm text-gray-700">AI·SW 기초상식 및 IT 관련 일반상식 퀴즈</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">운영방식</span>
              <p className="text-sm text-gray-700">사전신청 및 현장신청을 통해 참여 가능</p>
            </div>
          </div>

          <Link
            href="/apply/golden-bell"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark"
          >
            골든벨 사전신청하기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
