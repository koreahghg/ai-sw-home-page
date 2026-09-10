"use client";

import { useState } from "react";
import PageHero from "@/shared/ui/PageHero";
import LocalNav from "@/widgets/local-nav/ui/LocalNav";
import { noticeNavItems } from "@/shared/config/notice-nav";
import { faqs } from "@/entities/faq/model/data";

export default function NoticeFaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <PageHero title="FAQ" desc="자주 묻는 질문을 확인하세요." />

      <div className="flex flex-col gap-8 px-4 py-12 sm:flex-row sm:px-6">
        <LocalNav title="알림마당" items={noticeNavItems} />

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-gray-900">FAQ</h2>
          <div className="mt-4 divide-y divide-gray-100">
            {faqs.map((f, i) => {
              const isOpen = openIndex === i;

              return (
                <div key={i} className="px-3 py-4">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-3 text-left"
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <span className="shrink-0 rounded bg-brand-light px-1.5 py-0.5 text-[10px] font-bold text-brand">{f.category}</span>
                      <span className="text-sm font-semibold text-gray-800">{f.q}</span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`h-4 w-4 shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-3 text-sm leading-relaxed text-gray-500">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
