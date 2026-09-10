"use client";

import { useState } from "react";
import { Field, inputClass, SuccessPanel } from "@/shared/ui/Field";

type Division = "elementary" | "secondary";

export default function GoldenBellForm() {
  const [division, setDivision] = useState<Division>("elementary");
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    school: "",
    grade: "",
    classNo: "",
    name: "",
    phone: "",
    guardianName: "",
    guardianPhone: "",
    guardianAgree: false,
    schoolType: "중학교",
  });

  const set = (key: string, value: string | boolean) => setForm((f) => ({ ...f, [key]: value }));

  const canSubmit =
    division === "elementary"
      ? form.school && form.grade && form.classNo && form.name && form.phone && form.guardianName && form.guardianPhone && form.guardianAgree
      : form.school && form.grade && form.classNo && form.name && form.phone;

  if (submitted) {
    return (
      <div>
        <SuccessPanel title="골든벨 참가 신청이 완료되었습니다" desc={`${division === "elementary" ? "초등부" : "중등부"} · ${form.name}님`} />
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-1 rounded-full bg-gray-100 p-1 text-sm">
        <button
          type="button"
          onClick={() => setDivision("elementary")}
          className={`flex-1 rounded-full py-2 font-semibold transition ${
            division === "elementary" ? "bg-white text-brand" : "text-gray-500"
          }`}
        >
          초등부
        </button>
        <button
          type="button"
          onClick={() => setDivision("secondary")}
          className={`flex-1 rounded-full py-2 font-semibold transition ${
            division === "secondary" ? "bg-white text-brand" : "text-gray-500"
          }`}
        >
          중등부
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="mt-6 space-y-5 rounded-2xl border border-gray-100 bg-white p-6"
      >
        {division === "secondary" && (
          <Field label="학교급" required>
            <select value={form.schoolType} onChange={(e) => set("schoolType", e.target.value)} className={inputClass}>
              <option value="중학교">중학교</option>
              <option value="고등학교">고등학교</option>
            </select>
          </Field>
        )}

        <Field label="학교" required>
          <input value={form.school} onChange={(e) => set("school", e.target.value)} placeholder="학교명" className={inputClass} />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="학년" required>
            <input value={form.grade} onChange={(e) => set("grade", e.target.value)} placeholder="예: 3" className={inputClass} />
          </Field>
          <Field label="반" required>
            <input value={form.classNo} onChange={(e) => set("classNo", e.target.value)} placeholder="예: 2" className={inputClass} />
          </Field>
        </div>

        <Field label="이름" required>
          <input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="참가자 이름" className={inputClass} />
        </Field>

        <Field label="연락처" required>
          <input value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="'-' 없이 숫자만 입력" className={inputClass} />
        </Field>

        {division === "elementary" && (
          <>
            <Field label="보호자 이름" required>
              <input value={form.guardianName} onChange={(e) => set("guardianName", e.target.value)} className={inputClass} />
            </Field>
            <Field label="보호자 연락처" required>
              <input value={form.guardianPhone} onChange={(e) => set("guardianPhone", e.target.value)} placeholder="'-' 없이 숫자만 입력" className={inputClass} />
            </Field>
            <label className="flex items-start gap-2 rounded-xl bg-gray-50 p-4 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={form.guardianAgree}
                onChange={(e) => set("guardianAgree", e.target.checked)}
                className="mt-0.5"
              />
              <span>
                <span className="font-semibold text-gray-800">[필수]</span> 보호자는 자녀의 골든벨 참가 및 개인정보 수집·이용에 동의합니다.
              </span>
            </label>
          </>
        )}

        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full rounded-full bg-brand py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
        >
          골든벨 참가 신청하기
        </button>
      </form>
    </div>
  );
}
