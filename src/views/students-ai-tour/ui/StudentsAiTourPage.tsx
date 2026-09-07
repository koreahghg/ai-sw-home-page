import Link from "next/link";
import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { studentsNavItems } from "@/shared/config/students-nav";

export default function StudentsAiTourPage() {
  return (
    <div>
      <PageHero title="AI교육원 탐방" desc="실제 AI교육원 시설을 둘러보는 견학 프로그램입니다. 회차별 40명 한정으로 조기 마감될 수 있습니다." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="학생마당" items={studentsNavItems} />

        <div className="min-w-0 flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">AI교육원 탐방</h2>
              <p className="mt-1 text-sm text-gray-500">실제 AI교육원 시설을 둘러보는 견학 프로그램 (회차별 40명 한정)</p>
            </div>
            <Link href="/apply/ai-tour" className="shrink-0 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-dark">
              탐방 신청하기 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
