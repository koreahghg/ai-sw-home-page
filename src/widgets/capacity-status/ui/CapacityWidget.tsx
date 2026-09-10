"use client";

import { useMemo, useState } from "react";
import { capacitySlots, STATUS_LABEL, STATUS_STYLE } from "@/entities/capacity/model/data";

const DATES = ["10.31(토)", "11.1(일)"] as const;

export default function CapacityWidget() {
  const [date, setDate] = useState<(typeof DATES)[number]>(DATES[0]);

  const rows = useMemo(
    () => capacitySlots.filter((s) => s.date === date),
    [date]
  );

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-gray-900">실시간 접수 현황</h3>
          <p className="mt-0.5 text-xs text-gray-400">프로그램별 정원 대비 접수 상태 (예시 데이터)</p>
        </div>
        <div className="flex gap-1 rounded-full bg-gray-100 p-1 text-sm">
          {DATES.map((d) => (
            <button
              key={d}
              onClick={() => setDate(d)}
              className={`rounded-full px-3 py-1.5 font-medium transition ${
                date === d ? "bg-white text-brand" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 divide-y divide-gray-100">
        {rows.map((slot) => (
          <div key={slot.id} className="flex items-center gap-3 py-3">
            <div className="w-16 shrink-0 rounded bg-gray-50 px-2 py-1 text-center text-xs font-semibold text-gray-500">
              {slot.time}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="truncate text-sm font-semibold text-gray-800">{slot.program}</p>
                <span className="shrink-0 rounded bg-gray-50 px-1.5 py-0.5 text-[10px] font-medium text-gray-400">
                  {slot.audience}
                </span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  className={`h-full rounded-full ${
                    slot.status === "closed"
                      ? "bg-gray-300"
                      : slot.status === "almost"
                      ? "bg-amber-400"
                      : "bg-emerald-400"
                  }`}
                  style={{ width: `${Math.min(100, (slot.current / slot.total) * 100)}%` }}
                />
              </div>
            </div>
            <div className="shrink-0 text-right">
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${STATUS_STYLE[slot.status]}`}
              >
                {STATUS_LABEL[slot.status]}
              </span>
              <p className="mt-1 text-[11px] text-gray-400">
                {slot.current}/{slot.total}명
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
