"use client";

import { useState } from "react";
import PhoneVerify from "@/features/phone-verify/ui/PhoneVerify";
import { mockApplications, type Application } from "@/entities/application/model/data";

export default function ApplyLookupForm() {
  const [phone, setPhone] = useState("");
  const [verified, setVerified] = useState(false);
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
      <PhoneVerify phone={phone} onPhoneChange={setPhone} verified={verified} onVerified={setVerified} />
      <button
        onClick={search}
        disabled={!verified}
        className="mt-3 w-full rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
      >
        조회
      </button>
      <p className="mt-2 text-xs text-gray-400">프로토타입 데모: 인증 완료 후 조회하면 예시 신청 내역이 표시됩니다.</p>

      {searched && (
        <div className="mt-8 space-y-3">
          {applications.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-gray-200 p-8 text-center text-sm text-gray-400">
              조회된 신청 내역이 없습니다.
            </p>
          ) : (
            applications.map((a) => (
              <div
                key={a.id}
                className="flex items-center justify-between gap-4 rounded-lg border border-gray-100 bg-white p-5"
              >
                <div>
                  <p className="text-base font-bold text-gray-900">{a.program}</p>
                  <p className="mt-1 text-sm text-gray-400">{a.date}</p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span
                    className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold ${
                      a.status === "취소됨" ? "bg-gray-100 text-gray-400" : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    {a.status === "취소됨" ? "✕" : "✓"} {a.status}
                  </span>
                  {a.status === "신청완료" && (
                    <button
                      onClick={() => cancel(a.id)}
                      className="rounded-full border border-rose-200 px-3 py-1.5 text-xs font-semibold text-rose-500 transition-colors hover:bg-rose-50"
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
