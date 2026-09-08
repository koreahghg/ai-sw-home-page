import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { studentsNavItems } from "@/shared/config/students-nav";

const BOOTHS = [
  { title: "AI 드로잉 체험", desc: "생성형 AI로 나만의 캐릭터 그리기", zone: "1층 A구역" },
  { title: "코딩 로봇 챌린지", desc: "블록 코딩으로 미로 탈출 로봇 조종", zone: "1층 B구역" },
  { title: "AI 음성인식 게임", desc: "음성으로 명령하는 미니게임 체험", zone: "2층 C구역" },
  { title: "VR 우주 탐험", desc: "VR 기기로 떠나는 가상 우주여행", zone: "2층 D구역" },
];

export default function StudentsPage() {
  return (
    <div>
      <PageHero title="체험 부스 안내" desc="AI·SW 한마당 - 체험 부스부터 골든벨, AI교육원 탐방까지 학생들을 위한 프로그램을 확인하세요." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="학생마당" items={studentsNavItems} />

        <div className="min-w-0 flex-1">
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
        </div>
      </div>
    </div>
  );
}
