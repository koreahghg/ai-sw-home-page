export function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-gray-700">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      {children}
    </div>
  );
}

export const inputClass =
  "w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand-light";

export function SuccessPanel({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-8 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white">✓</div>
      <h2 className="mt-4 text-lg font-bold text-emerald-800">{title}</h2>
      <p className="mt-2 text-sm text-emerald-700">{desc}</p>
      <p className="mt-4 text-xs text-emerald-600">
        신청 내역은 상단 메뉴 &lsquo;사전신청 &gt; 신청 내역 조회·취소&rsquo;에서 확인할 수 있습니다. (프로토타입: 실제 데이터는 저장되지 않습니다)
      </p>
    </div>
  );
}
