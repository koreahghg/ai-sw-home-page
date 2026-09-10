import Link from "next/link";
import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { applyNavItems } from "@/shared/config/apply-nav";

const STUDENT_APPLY = [
  { href: "/apply/register", title: "학생 사전등록", desc: "오전/오후 시간대 선택, 보호자 동반 최대 5명", tag: "학생" },
  { href: "/apply/golden-bell", title: "AI·SW 골든벨 신청", desc: "초등부 · 중등부 각 50명", tag: "학생" },
  { href: "/apply/ai-tour", title: "AI교육원 탐방 신청", desc: "회차별 2팀 · 팀당 8명 한정", tag: "학생" },
];

const TEACHER_APPLY = [
  { href: "/apply/teacher-training", title: "교사 연수 신청", desc: "삼성·애플·구글 3개 세션 중 선택", tag: "교사" },
  { href: "/apply/teacher-lecture", title: "미래교육 특강 신청", desc: "10.31(토) 오전 11시, 선착순 300명", tag: "교사" },
];

function ApplyCard({ href, title, desc, tag }: { href: string; title: string; desc: string; tag: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 transition hover:border-brand hover:bg-brand-light"
    >
      <div>
        <span
          className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
            tag === "학생" ? "bg-sky-50 text-sky-700" : "bg-violet-50 text-violet-700"
          }`}
        >
          {tag}
        </span>
        <p className="mt-2 text-sm font-bold text-gray-900">{title}</p>
        <p className="mt-1 text-xs text-gray-500">{desc}</p>
      </div>
      <span className="text-xl text-gray-300">→</span>
    </Link>
  );
}

export default function ApplyHubPage() {
  return (
    <div>
      <PageHero title="전체 신청 보기" desc="학생·학부모와 교원을 위한 모든 프로그램 신청을 한 곳에서 처리하세요. 신청 내역 조회와 취소도 여기서 가능합니다." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="사전신청" items={applyNavItems} />

        <div className="min-w-0 flex-1">
          <Link
            href="/apply/check"
            className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-gray-900 p-5 text-white sm:p-6"
          >
            <div>
              <p className="text-sm font-bold">📋 신청 내역 조회 · 취소</p>
              <p className="mt-1 text-xs text-gray-300">휴대폰 번호로 내가 신청한 모든 프로그램을 한 번에 확인하세요.</p>
            </div>
            <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-gray-900">조회하기 →</span>
          </Link>

          <section className="mt-10">
            <h2 className="text-lg font-bold text-gray-900">👦 학생 · 학부모 신청</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {STUDENT_APPLY.map((c) => (
                <ApplyCard key={c.href} {...c} />
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-lg font-bold text-gray-900">👩‍🏫 교원 신청</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {TEACHER_APPLY.map((c) => (
                <ApplyCard key={c.href} {...c} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
