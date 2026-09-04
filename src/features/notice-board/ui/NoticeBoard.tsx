"use client";

import { useState } from "react";
import { notices } from "@/entities/notice/model/data";
import { faqs } from "@/entities/faq/model/data";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";

const TABS = ["공지사항", "FAQ", "주차 안내"] as const;

export default function NoticeBoard() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("공지사항");

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
      <LocalNav
        title="알림마당"
        items={TABS.map((t) => ({ key: t, label: t, active: tab === t, onClick: () => setTab(t) }))}
      />

      <div className="min-w-0 flex-1">
        {tab === "공지사항" && (
          <div className="divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-100 bg-white">
            {notices.map((n) => (
              <div key={n.id} className="flex items-center justify-between gap-3 px-5 py-4">
                <div className="flex items-center gap-2 min-w-0">
                  {n.pinned && (
                    <span className="shrink-0 rounded bg-rose-50 px-1.5 py-0.5 text-[10px] font-bold text-rose-600">필독</span>
                  )}
                  <p className="truncate text-sm font-medium text-gray-800">{n.title}</p>
                </div>
                <span className="shrink-0 text-xs text-gray-400">{n.date}</span>
              </div>
            ))}
          </div>
        )}

        {tab === "FAQ" && (
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-gray-100 bg-white p-5 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                  <span className="flex items-center gap-2">
                    <span className="rounded bg-brand-light px-1.5 py-0.5 text-[10px] font-bold text-brand">{f.category}</span>
                    <span className="text-sm font-semibold text-gray-800">{f.q}</span>
                  </span>
                  <span className="shrink-0 text-gray-300 transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{f.a}</p>
              </details>
            ))}
          </div>
        )}

        {tab === "주차 안내" && (
          <div className="rounded-2xl border border-gray-100 bg-white p-6">
            <p className="text-sm font-bold text-gray-900">🅿️ OO컨벤션센터 지하주차장</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li>• 행사 기간 중 주차 공간이 한정되어 있어 대중교통 이용을 강력히 권장합니다.</li>
              <li>• 사전등록 시 발급되는 QR코드를 제시하면 2시간 무료 주차가 제공됩니다.</li>
              <li>• 장애인 및 임산부 우선 주차 구역이 지하 1층에 별도 마련되어 있습니다.</li>
              <li>• 만차 시 인근 공영주차장(도보 5분) 이용을 안내해 드립니다.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
