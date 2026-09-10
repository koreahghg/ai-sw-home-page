import Link from "next/link";

const STUDENT_LINKS = [
  { href: "/apply/register", label: "사전등록 (오전/오후)", desc: "학생·학부모 최대 5명 동반" },
  { href: "/students", label: "1층 부스 체험", desc: "체험 부스 안내 보기" },
  { href: "/apply/golden-bell", label: "골든벨 신청", desc: "초등부 · 중등부" },
];

const TEACHER_LINKS = [
  { href: "/apply/teacher-training", label: "교사 연수 신청", desc: "3개 프로그램 운영" },
  { href: "/apply/teacher-lecture", label: "미래교육 특강 신청", desc: "AI 시대 교실 특강" },
  { href: "/teachers", label: "교사마당 둘러보기", desc: "부스 · 연수 안내" },
];

function QuickCard({
  title,
  emoji,
  links,
  tone,
}: {
  title: string;
  emoji: string;
  links: { href: string; label: string; desc: string }[];
  tone: "sky" | "violet";
}) {
  const toneStyle =
    tone === "sky"
      ? "from-sky-500 to-sky-600"
      : "from-violet-500 to-violet-600";

  return (
    <div className="flex-1 rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
      <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${toneStyle} px-3 py-1.5 text-sm font-bold text-white`}>
        <span>{emoji}</span>
        {title}
      </div>
      <div className="mt-4 space-y-2">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3 transition hover:border-brand hover:bg-brand-light"
          >
            <div>
              <p className="text-sm font-semibold text-gray-800">{l.label}</p>
              <p className="text-xs text-gray-400">{l.desc}</p>
            </div>
            <span className="text-gray-300">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function QuickActions() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <QuickCard title="학생 · 학부모" emoji="👦" links={STUDENT_LINKS} tone="sky" />
      <QuickCard title="교원(선생님)" emoji="👩‍🏫" links={TEACHER_LINKS} tone="violet" />
    </div>
  );
}
