"use client";

import { useState } from "react";
import PhoneVerify from "@/features/phone-verify/ui/PhoneVerify";
import { Field, inputClass, SuccessPanel } from "@/shared/ui/Field";
import { trainingPrograms } from "@/entities/training-program/model/data";

export default function TeacherTrainingForm() {
  const [phone, setPhone] = useState("");
  const [verified, setVerified] = useState(false);
  const [form, setForm] = useState({ name: "", school: "", position: "", email: "" });
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const set = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : prev.length < 2 ? [...prev, id] : prev
    );
  };

  const canSubmit = verified && form.name && form.school && form.position && form.email && selected.length > 0;

  if (submitted) {
    return (
      <div>
        <SuccessPanel title="연수 신청이 완료되었습니다" desc={`선택 프로그램 ${selected.length}건 · ${form.name} 선생님`} />
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
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-bold text-gray-900">희망 프로그램 선택 ({selected.length}/2)</h3>
        <div className="mt-4 space-y-2">
          {trainingPrograms.map((p) => (
            <label
              key={p.id}
              className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${
                selected.includes(p.id) ? "border-brand bg-brand-light" : "border-gray-100"
              }`}
            >
              <div>
                <p className="text-sm font-semibold text-gray-800">{p.title}</p>
                <p className="mt-0.5 text-xs text-gray-400">{p.time}</p>
              </div>
              <input
                type="checkbox"
                checked={selected.includes(p.id)}
                onChange={() => toggle(p.id)}
                disabled={!selected.includes(p.id) && selected.length >= 2}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 space-y-5 shadow-sm">
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
          <input
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="연수 자료 수신용 이메일"
            className={inputClass}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full rounded-full bg-brand py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
      >
        연수 신청하기
      </button>
    </form>
  );
}
