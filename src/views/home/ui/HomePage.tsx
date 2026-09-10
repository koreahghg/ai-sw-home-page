import Link from "next/link";
import QuickActions from "@/widgets/quick-actions/ui/QuickActions";
import CapacityWidget from "@/widgets/capacity-status/ui/CapacityWidget";
import CongestionWidget from "@/widgets/congestion-status/ui/CongestionWidget";
import PromoVideo from "@/widgets/promo-video/ui/PromoVideo";
import SparkleDecoration from "@/shared/ui/SparkleDecoration";
import { timeline } from "@/entities/schedule/model/data";

const HIGHLIGHTS = timeline.slice(0, 4);

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark to-brand text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <SparkleDecoration className="absolute left-4 top-1/2 hidden h-20 w-20 -translate-y-1/2 sm:left-10 sm:block sm:h-28 sm:w-28" />
        <SparkleDecoration className="absolute right-4 top-1/2 hidden h-20 w-20 -translate-y-1/2 sm:right-10 sm:block sm:h-28 sm:w-28" delay="-2.5s" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white">
            2026.10.31.(토) - 11.1.(일)
          </span>
          <h1 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">2026 전남광주 AI·SW체험한마당</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-sky-100 sm:text-base">
            학생을 위한 AI·SW 한마당과 교원을 위한 미래교육박람회가 한자리에.
            <br />
            지금 사전신청하고 줄서지 않고 스마트하게 참여하세요.
          </p>

          <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 rounded-full bg-white/10 px-6 py-4 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-3">
              <span className="shrink-0 rounded-full border border-white/50 px-3 py-1 text-xs font-bold">일시</span>
              <span className="text-sm font-bold sm:text-base">10.31(토) - 11.1(일)</span>
            </div>
            <div className="hidden h-5 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-3">
              <span className="shrink-0 rounded-full border border-white/50 px-3 py-1 text-xs font-bold">장소</span>
              <span className="text-sm font-bold sm:text-base">전남광주통합특별시교육청AI교육원</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            href="/apply/register"
            className="flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-br from-brand to-brand-dark p-5 text-white transition hover:brightness-105"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-2xl">📋</span>
              <div>
                <p className="text-base font-bold">학생·학부모 사전등록</p>
                <p className="mt-0.5 text-sm text-white/80">보호자 동반 최대 5명까지 등록 가능</p>
              </div>
            </div>
            <span className="shrink-0 rounded-full bg-white/20 px-5 py-2 text-sm font-bold">바로가기</span>
          </Link>
          <Link
            href="/guide/schedule"
            className="flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-br from-brand to-brand-dark p-5 text-white transition hover:brightness-105"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-2xl">📅</span>
              <div>
                <p className="text-base font-bold">박람회 프로그램 일정</p>
                <p className="mt-0.5 text-sm text-white/80">프로그램 일정을 미리 확인하세요.</p>
              </div>
            </div>
            <span className="shrink-0 rounded-full bg-white/20 px-5 py-2 text-sm font-bold">바로가기</span>
          </Link>
        </div>
        <div className="mt-4">
          <PromoVideo />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
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
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-gray-900">행사 일정 미리보기</h2>
          <Link href="/guide/schedule" className="shrink-0 text-sm font-semibold text-brand hover:underline">
            전체 일정표 보기 →
          </Link>
        </div>
        <div className="mt-4 flex flex-col divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white">
          {HIGHLIGHTS.map((item) => (
            <div key={`${item.date}-${item.time}-${item.title}`} className="flex items-center gap-4 px-5 py-4">
              <span className="w-24 shrink-0 rounded-full bg-brand-light px-2 py-1.5 text-center text-xs font-bold text-brand">{item.date}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-gray-800">{item.title}</p>
                <p className="mt-0.5 truncate text-xs text-gray-400">
                  {item.time} · {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
