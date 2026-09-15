import Link from "next/link";
import PromoVideo from "@/widgets/promo-video/ui/PromoVideo";
import TimelineSection from "@/widgets/event-timeline/ui/TimelineSection";
import QuickApplyGroups from "@/widgets/quick-apply/ui/QuickApplyGroups";
import RecentNotices from "@/widgets/recent-notices/ui/RecentNotices";
import BackgroundLines from "@/shared/ui/BackgroundLines";
import { SITE_NAME, SITE_URL } from "@/shared/config/site";

const HERO_FACTS = [
  { label: "일정", value: "10.31(토) - 11.1(일)" },
  { label: "장소", value: "전남광주통합특별시교육청AI교육원" },
  { label: "대상", value: "학생 · 교원 · 일반 시민 누구나" },
];

const EVENT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: SITE_NAME,
  description: "학생을 위한 AI·SW 한마당과 교원을 위한 미래교육박람회가 한자리에 모이는 행사입니다.",
  startDate: "2026-10-31T09:30:00+09:00",
  endDate: "2026-11-01T16:00:00+09:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "전남광주통합특별시교육청AI교육원",
    address: {
      "@type": "PostalAddress",
      addressLocality: "전남광주",
      addressCountry: "KR",
    },
  },
  image: [`${SITE_URL}/opengraph-image`],
  organizer: {
    "@type": "Organization",
    name: "전남광주통합특별시교육청",
  },
  url: SITE_URL,
};

export default function HomePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(EVENT_JSON_LD) }} />
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark to-brand text-white">
        <BackgroundLines
          className="pointer-events-none absolute left-1/2 top-1/2 w-[2400px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-30"
          color="#FFFFFF"
        />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="font-black leading-tight">
                  <span className="block text-2xl sm:text-4xl">2026 전남광주통합특별시교육청</span>
                  <span className="mt-2 block text-3xl sm:mt-3 sm:text-5xl">AI미래교육박람회</span>
                </h1>
                <p className="mt-4 max-w-xl text-sm text-sky-100 sm:text-base">
                  학생을 위한 AI·SW 한마당과 교원을 위한 미래교육박람회가 한자리에.
                  <br />
                  지금 사전신청하고 기다림 없이 참여하세요.
                </p>
              </div>

              <Link
                href="/apply/register"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand transition hover:bg-sky-50"
              >
                사전등록하기 →
              </Link>
            </div>

            <PromoVideo />
          </div>

          <div className="mt-10 flex w-full flex-col items-center gap-4 rounded-full bg-white/15 px-6 py-4 sm:flex-row sm:justify-between sm:gap-8">
            {HERO_FACTS.map((f, i) => (
              <div key={f.label} className="flex items-center gap-4">
                {i > 0 && <div className="hidden h-5 w-px bg-white/20 sm:block" />}
                <div className="flex items-center gap-3">
                  <span className="shrink-0 rounded-full border border-white/50 px-3 py-1 text-xs font-bold">{f.label}</span>
                  <span className="text-sm font-bold sm:text-base">{f.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden">
        <BackgroundLines className="pointer-events-none absolute inset-x-0 top-0 -z-10 w-full min-w-[1600px]" />

        <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <h2 className="text-lg font-bold text-gray-900">지금, 미래를 만나보세요!</h2>
          <p className="mt-1 text-sm text-gray-500">
            AI로 연결되는 배움의 장, 2026 전남광주통합특별시교육청 AI미래교육박람회. 학생, 교사, 지역사회가 함께 만드는 특별한 경험에 지금 참여하세요.
          </p>
          <div className="mt-4">
            <QuickApplyGroups />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-gray-900">행사 일정</h2>
            <Link href="/guide/schedule" className="shrink-0 text-sm font-semibold text-brand hover:underline">
              전체 일정표 보기 →
            </Link>
          </div>
          <div className="mt-4">
            <TimelineSection />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-gray-900">공지사항</h2>
            <Link href="/notice" className="shrink-0 text-sm font-semibold text-brand hover:underline">
              전체보기 →
            </Link>
          </div>
          <div className="mt-4">
            <RecentNotices />
          </div>
        </section>
      </div>
    </div>
  );
}
