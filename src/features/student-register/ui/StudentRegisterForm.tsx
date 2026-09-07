"use client";

import { useState } from "react";
import PhoneVerify from "@/features/phone-verify/ui/PhoneVerify";
import { Field, inputClass, SuccessPanel } from "@/shared/ui/Field";

const REGIONS = ["서울", "경기", "인천", "부산", "대구", "광주", "대전", "울산", "기타"];
const SCHOOL_LEVELS = ["미취학", "초등학생", "중학생", "고등학생", "학부모/보호자"];

interface Participant {
  name: string;
  schoolLevel: string;
}

export default function StudentRegisterForm() {
  const [phone, setPhone] = useState("");
  const [verified, setVerified] = useState(false);
  const [region, setRegion] = useState("");
  const [date, setDate] = useState("10.31(토)");
  const [time, setTime] = useState("오전");
  const [participants, setParticipants] = useState<Participant[]>([{ name: "", schoolLevel: "" }]);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = verified && region && participants.every((p) => p.name && p.schoolLevel);

  const updateParticipant = (i: number, key: keyof Participant, value: string) => {
    setParticipants((prev) => prev.map((p, idx) => (idx === i ? { ...p, [key]: value } : p)));
  };

  if (submitted) {
    return (
      <div>
        <SuccessPanel title="사전등록이 완료되었습니다" desc={`${date} ${time} · 참가자 ${participants.length}명 등록`} />
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
      <div className="rounded-2xl border border-gray-100 bg-white p-6 space-y-5 shadow-sm">
        <PhoneVerify phone={phone} onPhoneChange={setPhone} verified={verified} onVerified={setVerified} />

        <Field label="지역" required>
          <select value={region} onChange={(e) => setRegion(e.target.value)} className={inputClass}>
            <option value="">선택하세요</option>
            {REGIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="방문 일자" required>
            <select value={date} onChange={(e) => setDate(e.target.value)} className={inputClass}>
              <option value="10.31(토)">10.31(토)</option>
              <option value="11.1(일)">11.1(일)</option>
            </select>
          </Field>
          <Field label="방문 시간대" required>
            <select value={time} onChange={(e) => setTime(e.target.value)} className={inputClass}>
              <option value="오전">오전</option>
              <option value="오후">오후</option>
            </select>
          </Field>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900">참가자 정보 ({participants.length}/5)</h3>
          {participants.length < 5 && (
            <button
              type="button"
              onClick={() => setParticipants((p) => [...p, { name: "", schoolLevel: "" }])}
              className="rounded-full bg-brand-light px-3 py-1.5 text-xs font-semibold text-brand hover:bg-sky-100"
            >
              + 참가자 추가
            </button>
          )}
        </div>

        <div className="mt-4 space-y-4">
          {participants.map((p, i) => (
            <div key={i} className="rounded-xl border border-gray-100 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-gray-400">참가자 {i + 1}</p>
                {participants.length > 1 && (
                  <button
                    type="button"
                    onClick={() => setParticipants((prev) => prev.filter((_, idx) => idx !== i))}
                    className="text-xs text-gray-400 hover:text-rose-500"
                  >
                    삭제
                  </button>
                )}
              </div>
              <div className="mt-2 grid grid-cols-2 gap-3">
                <input
                  value={p.name}
                  onChange={(e) => updateParticipant(i, "name", e.target.value)}
                  placeholder="이름"
                  className={inputClass}
                />
                <select
                  value={p.schoolLevel}
                  onChange={(e) => updateParticipant(i, "schoolLevel", e.target.value)}
                  className={inputClass}
                >
                  <option value="">학교급 선택</option>
                  {SCHOOL_LEVELS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full rounded-full bg-brand py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
      >
        사전등록 신청하기
      </button>
    </form>
  );
}
