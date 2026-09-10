import Link from "next/link";
import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { teachersNavItems } from "@/shared/config/teachers-nav";

export default function TeachersLecturePage() {
  return (
    <div>
      <PageHero title="미래교육 특강" desc="10.31(토) 오전 11시 진행되는 미래교육 특강입니다. 선착순 300명 참여 가능합니다." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="교사마당" items={teachersNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-gray-900">미래교육 특강</h2>

          <div className="mt-4 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4">
            <span className="shrink-0 rounded-full bg-gray-900 px-3 py-1.5 text-xs font-bold text-white">특강일시</span>
            <p className="text-sm font-semibold text-gray-800">
              10.31(토) <span className="text-brand">오전 11:00</span>
            </p>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5">
              <span className="flex shrink-0 items-center justify-center rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-white">대상</span>
              <p className="text-sm text-gray-700">학생·교사·일반 시민 (선착순 300명)</p>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5">
              <span className="flex shrink-0 items-center justify-center rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-white">장소</span>
              <p className="text-sm text-gray-700">장소 추후 안내</p>
            </div>
          </div>

          <div className="mt-3 space-y-3 rounded-2xl border border-gray-100 bg-white p-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">내용</span>
              <p className="text-sm text-gray-700">미래교육 특강 (세부 주제 추후 안내)</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">운영방식</span>
              <p className="text-sm text-gray-700">선착순 300명, 사전신청 권장</p>
            </div>
          </div>

          <Link
            href="/apply/teacher-lecture"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark"
          >
            특강 신청하기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
