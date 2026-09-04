"use client";

import { useState } from "react";

export default function PhoneVerify({
  phone,
  onPhoneChange,
  verified,
  onVerified,
}: {
  phone: string;
  onPhoneChange: (v: string) => void;
  verified: boolean;
  onVerified: (v: boolean) => void;
}) {
  const [sent, setSent] = useState(false);
  const [code, setCode] = useState("");

  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-gray-700">
        휴대폰 번호 <span className="text-rose-500">*</span>
      </label>
      <div className="flex gap-2">
        <input
          type="tel"
          value={phone}
          onChange={(e) => {
            onPhoneChange(e.target.value);
            onVerified(false);
            setSent(false);
          }}
          placeholder="'-' 없이 숫자만 입력"
          disabled={verified}
          className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand-light disabled:bg-gray-50 disabled:text-gray-400"
        />
        <button
          type="button"
          disabled={verified || phone.length < 10}
          onClick={() => setSent(true)}
          className="shrink-0 rounded-lg bg-gray-800 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
        >
          인증번호 받기
        </button>
      </div>

      {sent && !verified && (
        <div className="mt-2 flex gap-2">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="인증번호 6자리 (예시: 123456)"
            className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand-light"
          />
          <button
            type="button"
            disabled={code.length < 4}
            onClick={() => onVerified(true)}
            className="shrink-0 rounded-lg bg-brand px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
          >
            인증확인
          </button>
        </div>
      )}
      {sent && !verified && (
        <p className="mt-1.5 text-xs text-gray-400">알림톡으로 인증번호가 발송되었습니다. (프로토타입: 임의 값 입력 가능)</p>
      )}
      {verified && <p className="mt-1.5 text-xs font-semibold text-emerald-600">✓ 휴대폰 인증이 완료되었습니다.</p>}
    </div>
  );
}
