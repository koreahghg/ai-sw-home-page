import { timeline } from "@/entities/schedule/model/data";

const DATES = ["10.31(토)", "11.1(일)"] as const;

export default function TimelineSection() {
  return (
    <div className="flex flex-col gap-8">
      {DATES.map((date) => {
        const items = timeline.filter((t) => t.date === date);

        return (
          <div key={date} className="overflow-hidden rounded-2xl border border-gray-300">
            <table className="w-full table-fixed border-collapse text-left text-sm">
              <colgroup>
                <col className="w-[10%]" />
                <col className="w-[22%]" />
                <col className="w-[14%]" />
                <col className="w-[12%]" />
                <col className="w-[42%]" />
              </colgroup>
              <thead>
                <tr className="bg-brand text-white">
                  <th className="border-r border-white/20 px-4 py-3 text-center font-bold">일자</th>
                  <th className="border-r border-white/20 px-4 py-3 text-center font-bold">구분</th>
                  <th className="border-r border-white/20 px-4 py-3 text-center font-bold">시간</th>
                  <th className="border-r border-white/20 px-4 py-3 text-center font-bold">장소</th>
                  <th className="px-4 py-3 text-center font-bold">주요내용</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={`${item.time}-${item.title}`} className="border-t border-gray-300">
                    {i === 0 && (
                      <td rowSpan={items.length} className="border-r border-gray-300 bg-brand-light px-4 py-3 text-center font-bold text-gray-900">
                        {date}
                      </td>
                    )}
                    <td className="border-r border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">{item.title}</td>
                    <td className="border-r border-gray-300 px-4 py-3 text-center text-gray-700">{item.time}</td>
                    <td className="border-r border-gray-300 px-4 py-3 text-center text-gray-700">{item.location}</td>
                    <td className="px-4 py-3 text-gray-700">
                      <ul className="space-y-0.5">
                        {item.detail.map((d) => (
                          <li key={d}>· {d}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
