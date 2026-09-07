"use client";

import { useState } from "react";
import { Field, inputClass, SuccessPanel } from "@/shared/ui/Field";

export default function AiTourForm() {
  const [form, setForm] = useState({
    school: "",
    grade: "",
    name: "",
    phone: "",
    date: "10.31(토)",
    guardianAgree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const set = (key: string, value: string | boolean) => setForm((f) => ({ ...f, [key]: value }));

  const canSubmit = form.school && form.grade && form.name && form.phone && form.guardianAgree;

  if (submitted) {
    return (
      <div>
        <SuccessPanel title="탐방 신청이 완료되었습니다" desc={`${form.date} 오전 회차 · ${form.name}님`} />
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
    >
      <Field label="희망 일자" required>
        <select value={form.date} onChange={(e) => set("date", e.target.value)} className={inputClass}>
          <option value="10.31(토)">10.31(토) 오전</option>
          <option value="11.1(일)">11.1(일) 오전</option>
        </select>
      </Field>
      <Field label="학교" required>
        <input value={form.school} onChange={(e) => set("school", e.target.value)} placeholder="학교명" className={inputClass} />
      </Field>
      <Field label="학년" required>
        <input value={form.grade} onChange={(e) => set("grade", e.target.value)} placeholder="예: 초등 4학년" className={inputClass} />
      </Field>
      <Field label="이름" required>
        <input value={form.name} onChange={(e) => set("name", e.target.value)} className={inputClass} />
      </Field>
      <Field label="연락처" required>
        <input value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="'-' 없이 숫자만 입력" className={inputClass} />
      </Field>
      <label className="flex items-start gap-2 rounded-xl bg-gray-50 p-4 text-sm text-gray-600">
        <input type="checkbox" checked={form.guardianAgree} onChange={(e) => set("guardianAgree", e.target.checked)} className="mt-0.5" />
        <span>
          <span className="font-semibold text-gray-800">[필수]</span> 견학 참가 및 개인정보 수집·이용에 동의합니다.
        </span>
      </label>
      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full rounded-full bg-brand py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
      >
        탐방 신청하기
      </button>
    </form>
  );
}
