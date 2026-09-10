import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { teachersNavItems } from "@/shared/config/teachers-nav";
import { teacherBooths } from "@/entities/booth/model/data";

export default function TeachersPage() {
  return (
    <div>
      <PageHero title="부스 안내" desc="미래교육박람회 - 교원을 위한 부스 전시, 연수, 특강 프로그램을 확인하세요." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="교사마당" items={teachersNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-gray-900">부스 안내</h2>

          <div className="mt-4 overflow-hidden rounded-2xl border border-gray-300">
            <table className="w-full table-fixed border-collapse text-left text-sm">
              <colgroup>
                <col className="w-[10%]" />
                <col className="w-[20%]" />
                <col className="w-[12%]" />
                <col className="w-[16%]" />
                <col className="w-[42%]" />
              </colgroup>
              <thead>
                <tr className="bg-brand text-white">
                  <th className="border-r border-white/20 px-4 py-3 text-center font-bold">부스번호</th>
                  <th className="border-r border-white/20 px-4 py-3 text-center font-bold">부스 이름</th>
                  <th className="border-r border-white/20 px-4 py-3 text-center font-bold">유형</th>
                  <th className="border-r border-white/20 px-4 py-3 text-center font-bold">참여대상</th>
                  <th className="px-4 py-3 text-center font-bold">프로그램 제목</th>
                </tr>
              </thead>
              <tbody>
                {teacherBooths.map((b) => (
                  <tr key={b.no} className="border-t border-gray-300">
                    <td className="border-r border-gray-300 bg-brand-light px-4 py-3 text-center font-bold text-gray-900">{b.no}</td>
                    <td className="border-r border-gray-300 px-4 py-3 text-center text-gray-700">{b.name}</td>
                    <td className="border-r border-gray-300 px-4 py-3 text-center text-gray-700">{b.type}</td>
                    <td className="border-r border-gray-300 px-4 py-3 text-center text-gray-700">{b.audience}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{b.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
