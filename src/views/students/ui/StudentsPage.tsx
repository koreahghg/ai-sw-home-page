import Link from "next/link";
import PageHero from "@/shared/ui/PageHero";
import SubNav from "@/widgets/sub-nav/ui/SubNav";

const BOOTHS = [
  { title: "AI 드로잉 체험", desc: "생성형 AI로 나만의 캐릭터 그리기", zone: "1층 A구역" },
  { title: "코딩 로봇 챌린지", desc: "블록 코딩으로 미로 탈출 로봇 조종", zone: "1층 B구역" },
  { title: "AI 음성인식 게임", desc: "음성으로 명령하는 미니게임 체험", zone: "2층 C구역" },
  { title: "VR 우주 탐험", desc: "VR 기기로 떠나는 가상 우주여행", zone: "2층 D구역" },
];

const SECTIONS = [
  { id: "booths", label: "체험 부스 안내" },
  { id: "golden-bell", label: "AI·SW 골든벨" },
  { id: "ai-tour", label: "AI교육원 탐방" },
  { id: "standing", label: "상설 체험" },
];

export default function StudentsPage() {
  return (
    <div>
      <PageHero title="학생마당" desc="AI·SW 한마당 - 체험 부스부터 골든벨, AI교육원 탐방까지 학생들을 위한 프로그램을 확인하세요." />
      <SubNav items={SECTIONS} />

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12 sm:px-6">
        <section id="booths" className="scroll-mt-32">
          <h2 className="text-lg font-bold text-gray-900">체험 부스 안내</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {BOOTHS.map((b) => (
              <div key={b.title} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-gray-900">{b.title}</p>
                  <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-semibold text-sky-700">
                    {b.zone}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="golden-bell" className="scroll-mt-32 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 p-6 text-white sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold">AI·SW 골든벨</h2>
              <p className="mt-1 text-sm text-sky-100">초등부 · 중등부로 나누어 진행되는 퀴즈 배틀. 우승팀에게는 상품이 제공됩니다.</p>
            </div>
            <Link href="/apply/golden-bell" className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-sky-700 hover:bg-sky-50">
              골든벨 신청하기 →
            </Link>
          </div>
        </section>

        <section id="ai-tour" className="scroll-mt-32 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">AI교육원 탐방</h2>
              <p className="mt-1 text-sm text-gray-500">실제 AI교육원 시설을 둘러보는 견학 프로그램 (회차별 40명 한정)</p>
            </div>
            <Link href="/apply/ai-tour" className="shrink-0 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-dark">
              탐방 신청하기 →
            </Link>
          </div>
        </section>

        <section id="standing" className="scroll-mt-32">
          <h2 className="text-lg font-bold text-gray-900">상설 체험</h2>
          <p className="mt-2 text-sm text-gray-500">
            사전신청 없이 누구나 자유롭게 참여할 수 있는 상시 운영 체험존입니다. (3D프린팅 체험, AI 그림퀴즈, 코딩 보드게임 등)
          </p>
        </section>
      </div>
    </div>
  );
}
