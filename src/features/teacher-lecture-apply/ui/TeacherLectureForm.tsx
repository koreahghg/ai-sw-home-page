"use client";

import { useState } from "react";
import PhoneVerify from "@/features/phone-verify/ui/PhoneVerify";
import { Field, inputClass, SuccessPanel } from "@/shared/ui/Field";
import { lectures } from "@/entities/lecture/model/data";

export default function TeacherLectureForm() {
  const [phone, setPhone] = useState("");
  const [verified, setVerified] = useState(false);
  const [lecture, setLecture] = useState("");
  const [form, setForm] = useState({ name: "", school: "", position: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const set = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const canSubmit = verified && lecture && form.name && form.school && form.position && form.email;

  if (submitted) {
    const selected = lectures.find((l) => l.id === lecture);
    return (
      <div>
        <SuccessPanel title="특강 신청이 완료되었습니다" desc={`${selected?.title} · ${form.name} 선생님`} />
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div className="rounded-2xl border border-gray-100 bg-white p-6">
        <h3 className="text-sm font-bold text-gray-900">특강 선택</h3>
        <div className="mt-4 space-y-2">
          {lectures.map((l) => (
            <label
              key={l.id}
              className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${
                lecture === l.id ? "border-brand bg-brand-light" : "border-gray-100"
              }`}
            >
              <div>
                <p className="text-sm font-semibold text-gray-800">{l.title}</p>
                <p className="mt-0.5 text-xs text-gray-400">{l.time}</p>
              </div>
              <input type="radio" name="lecture" checked={lecture === l.id} onChange={() => setLecture(l.id)} />
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 space-y-5">
        <Field label="이름" required>
          <input value={form.name} onChange={(e) => set("name", e.target.value)} className={inputClass} />
        </Field>
        <Field label="소속 학교" required>
          <input value={form.school} onChange={(e) => set("school", e.target.value)} placeholder="학교명" className={inputClass} />
        </Field>
        <Field label="직위" required>
          <select value={form.position} onChange={(e) => set("position", e.target.value)} className={inputClass}>
            <option value="">선택하세요</option>
            <option value="교사">교사</option>
            <option value="부장교사">부장교사</option>
            <option value="교감">교감</option>
            <option value="교장">교장</option>
            <option value="기타">기타</option>
          </select>
        </Field>
        <PhoneVerify phone={phone} onPhoneChange={setPhone} verified={verified} onVerified={setVerified} />
        <Field label="이메일" required>
          <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputClass} />
        </Field>
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full rounded-full bg-brand py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
      >
        특강 신청하기
      </button>
    </form>
  );
}
