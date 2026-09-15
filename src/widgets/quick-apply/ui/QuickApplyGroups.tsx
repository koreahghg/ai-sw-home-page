import Link from "next/link";

interface QuickApplyItem {
  href: string;
  icon: string;
  title: string;
  desc: string;
}

interface QuickApplyGroup {
  key: string;
  icon: string;
  title: string;
  desc: string;
  tone: string;
  items: QuickApplyItem[];
}

const GROUPS: QuickApplyGroup[] = [
  {
    key: "all",
    icon: "👥",
    title: "전체",
    desc: "누구나 참여할 수 있는 특별한 프로그램",
    tone: "bg-gradient-to-br from-gray-900 to-gray-800",
    items: [{ href: "/teachers/lecture", icon: "🎤", title: "특별 강연", desc: "AI가 만드는 우리의 일상, 미래를 만나는 시간" }],
  },
  {
    key: "students",
    icon: "🎓",
    title: "학생",
    desc: "AI·SW로 꿈을 키우는 미래의 주인공",
    tone: "bg-gradient-to-br from-brand to-brand-dark",
    items: [
      { href: "/students", icon: "🏬", title: "AI·SW체험한마당 부스 안내", desc: "학생들을 위한 체험 부스를 한눈에 확인하세요" },
      { href: "/students/golden-bell", icon: "🏆", title: "AI·SW 골든벨", desc: "도전하고, 배우고, 성장하는 AI·SW 퀴즈 대회!" },
      { href: "/students/ai-tour", icon: "🧭", title: "오디세이 투어", desc: "보고, 체험하고, 탐험하는 AI·SW 체험 투어" },
    ],
  },
  {
    key: "teachers",
    icon: "🧑‍🏫",
    title: "교사",
    desc: "함께 만들어가는 더 나은 미래교육",
    tone: "bg-gradient-to-br from-brand-deep to-[#3f3570]",
    items: [
      { href: "/teachers", icon: "🏬", title: "미래교육박람회 부스 안내", desc: "교원을 위한 체험 부스를 한눈에 확인하세요" },
      { href: "/teachers/training", icon: "📖", title: "교사 연수", desc: "AI 시대, 교사의 성장을 지원하는 전문 연수" },
    ],
  },
];

export default function QuickApplyGroups() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {GROUPS.map((group) => (
        <div key={group.key} className={`flex flex-col rounded-2xl ${group.tone} p-6 text-white`}>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-xl">{group.icon}</span>
            <div>
              <p className="text-lg font-bold">{group.title}</p>
              <p className="text-xs text-white/70">{group.desc}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-1 flex-col gap-2 border-t border-white/15 pt-5">
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-1.5 rounded-xl bg-white/10 px-4 py-3.5 transition hover:bg-white/20"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 text-sm font-bold">
                    <span className="text-base">{item.icon}</span>
                    {item.title}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm transition group-hover:bg-white group-hover:text-gray-900">
                    →
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-white/70">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
