import Link from "next/link";
import QuickActions from "@/widgets/quick-actions/ui/QuickActions";
import CapacityWidget from "@/widgets/capacity-status/ui/CapacityWidget";
import CongestionWidget from "@/widgets/congestion-status/ui/CongestionWidget";
import TimelineSection from "@/widgets/event-timeline/ui/TimelineSection";

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand via-brand-deep to-accent text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold text-sky-100">2026.10.31.(금) - 11.1.(토) &nbsp;|&nbsp; OO컨벤션센터</p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
            2026 AI미래교육박람회
          </h1>
          <p className="mt-4 max-w-xl text-sm text-sky-100 sm:text-base">
            학생을 위한 AI·SW 한마당과 교원을 위한 미래교육박람회가 한자리에.
            <br />
            지금 사전신청하고 줄서지 않고 스마트하게 참여하세요.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/apply/register"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-brand shadow-sm transition hover:bg-sky-50"
            >
              👦 학생·학부모 사전등록
            </Link>
            <Link
              href="/apply/teacher-training"
              className="rounded-full bg-brand-dark px-6 py-3 text-sm font-bold text-white ring-1 ring-inset ring-white/30 transition hover:bg-sky-900"
            >
              👩‍🏫 교원 연수·특강 신청
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-lg font-bold text-gray-900">바로가기</h2>
        <div className="mt-4">
          <QuickActions />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <CapacityWidget />
          <CongestionWidget />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <TimelineSection />
      </section>
    </div>
  );
}
