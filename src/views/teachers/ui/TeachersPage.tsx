import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { teachersNavItems } from "@/shared/config/teachers-nav";

const BOOTHS = [
  { title: "AI 디지털교과서 체험존", desc: "실제 수업에 활용 가능한 AI 디지털교과서 시연" },
  { title: "에듀테크 솔루션관", desc: "학습 분석·평가 도구 등 최신 에듀테크 전시" },
  { title: "교육 정책 상담 부스", desc: "미래교육 정책 관련 1:1 상담" },
];

export default function TeachersPage() {
  return (
    <div>
      <PageHero title="교사마당" desc="미래교육박람회 - 교원을 위한 부스 전시, 연수, 특강 프로그램을 확인하세요." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="교사마당" items={teachersNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-gray-900">부스 안내</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {BOOTHS.map((b) => (
              <div key={b.title} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <p className="text-sm font-bold text-gray-900">{b.title}</p>
                <p className="mt-2 text-sm text-gray-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
