"use client";

import { useMemo, useState } from "react";
import { timeline, CATEGORY_STYLE } from "@/entities/schedule/model/data";

const DATES = ["10.31(금)", "11.1(토)"] as const;

export default function TimelineSection() {
  const [date, setDate] = useState<(typeof DATES)[number]>(DATES[0]);

  const items = useMemo(
    () => timeline.filter((t) => t.date === date).sort((a, b) => a.time.localeCompare(b.time)),
    [date]
  );

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base font-bold text-gray-900">행사 통합 타임라인</h3>
        <div className="flex gap-1 rounded-full bg-gray-100 p-1 text-sm">
          {DATES.map((d) => (
            <button
              key={d}
              onClick={() => setDate(d)}
              className={`rounded-full px-3 py-1.5 font-medium transition ${
                date === d ? "bg-white text-brand shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <ol className="mt-5 space-y-0">
        {items.map((item, i) => (
          <li key={`${item.time}-${item.title}`} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold text-gray-400">{item.time}</span>
              <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
              {i < items.length - 1 && <span className="w-px flex-1 bg-gray-200" />}
            </div>
            <div className={`min-w-0 flex-1 pb-6 ${i === items.length - 1 ? "pb-0" : ""}`}>
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded px-2 py-0.5 text-[11px] font-semibold ${CATEGORY_STYLE[item.category]}`}>
                  {item.category}
                </span>
                <p className="text-sm font-semibold text-gray-800">{item.title}</p>
              </div>
              <p className="mt-1 text-xs text-gray-400">{item.location}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
