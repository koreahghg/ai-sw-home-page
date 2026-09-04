"use client";

import { useState } from "react";
import { inputClass } from "@/shared/ui/Field";
import { mockApplications, type Application } from "@/entities/application/model/data";

export default function ApplyLookupForm() {
  const [phone, setPhone] = useState("");
  const [searched, setSearched] = useState(false);
  const [applications, setApplications] = useState<Application[]>([]);

  const search = () => {
    setApplications(phone.length >= 10 ? mockApplications : []);
    setSearched(true);
  };

  const cancel = (id: string) => {
    setApplications((prev) => prev.map((a) => (a.id === id ? { ...a, status: "취소됨" } : a)));
  };

  return (
    <div>
      <div className="flex gap-2">
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="신청 시 입력한 휴대폰 번호 ('-' 없이)"
          className={inputClass}
        />
        <button
          onClick={search}
          className="shrink-0 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          조회
        </button>
      </div>
      <p className="mt-2 text-xs text-gray-400">프로토타입 데모: 10자리 이상 번호를 입력하면 예시 신청 내역이 표시됩니다.</p>

      {searched && (
        <div className="mt-8 space-y-3">
          {applications.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-gray-200 p-8 text-center text-sm text-gray-400">
              조회된 신청 내역이 없습니다.
            </p>
          ) : (
            applications.map((a) => (
              <div key={a.id} className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <div>
                  <p className="text-sm font-semibold text-gray-800">{a.program}</p>
                  <p className="mt-0.5 text-xs text-gray-400">{a.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-semibold ${a.status === "취소됨" ? "text-gray-400" : "text-emerald-600"}`}
                  >
                    {a.status}
                  </span>
                  {a.status === "신청완료" && (
                    <button
                      onClick={() => cancel(a.id)}
                      className="rounded-full border border-rose-200 px-3 py-1.5 text-xs font-semibold text-rose-500 hover:bg-rose-50"
                    >
                      신청 취소
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
