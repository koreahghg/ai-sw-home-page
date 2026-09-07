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

        <div className="min-w-0 flex-1 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 p-6 text-white sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold">AI·SW 골든벨</h2>
              <p className="mt-1 text-sm text-sky-100">초등부 · 중등부로 나누어 진행되는 퀴즈 배틀. 우승팀에게는 상품이 제공됩니다.</p>
            </div>
            <Link href="/apply/golden-bell" className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-sky-700 hover:bg-sky-50">
              골든벨 신청하기 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
