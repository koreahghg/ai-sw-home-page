import Link from "next/link";
import { congestionZones } from "@/entities/congestion/model/data";
import { capacitySlots } from "@/entities/capacity/model/data";
import { parkingTotal, parkingRemaining, parkingOccupiedPercent } from "@/entities/parking/model/data";

function StatCard({
  href,
  icon,
  label,
  badge,
  value,
  progress,
  progressColor,
  desc,
}: {
  href: string;
  icon: string;
  label: string;
  badge: string;
  value: string;
  progress: number;
  progressColor: string;
  desc: string;
}) {
  return (
    <Link href={href} className="flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-5 transition hover:border-brand">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-base text-white">{icon}</span>
          <span className="text-sm font-bold text-gray-900">{label}</span>
        </div>
        <span className="rounded-full bg-brand-light px-2 py-0.5 text-[10px] font-bold text-brand">{badge}</span>
      </div>
      <p className="text-2xl font-black text-gray-900">{value}</p>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div className={`h-full rounded-full ${progressColor}`} style={{ width: `${Math.min(100, progress)}%` }} />
      </div>
      <p className="text-xs text-gray-400">{desc}</p>
    </Link>
  );
}

export default function EventStatsRow() {
  const avgCongestion = Math.round(congestionZones.reduce((sum, z) => sum + z.percent, 0) / congestionZones.length);
  const congestionLevel = avgCongestion < 40 ? "여유" : avgCongestion < 70 ? "보통" : avgCongestion < 90 ? "혼잡" : "매우 혼잡";

  const registerSlots = capacitySlots.filter((s) => s.program === "학생 사전등록");
  const registerCurrent = registerSlots.reduce((sum, s) => sum + s.current, 0);
  const registerTotal = registerSlots.reduce((sum, s) => sum + s.total, 0);
  const registerPercent = Math.round((registerCurrent / registerTotal) * 100);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <StatCard
        href="/guide/directions"
        icon="👥"
        label="행사장 혼잡도"
        badge="실시간 (예시)"
        value={`${congestionLevel} ${avgCongestion}%`}
        progress={avgCongestion}
        progressColor="bg-brand"
        desc="구역별 혼잡도는 오시는 길 페이지에서 확인하세요."
      />
      <StatCard
        href="/notice/parking"
        icon="🚗"
        label="주차장 안내"
        badge="예시 데이터"
        value={`잔여 ${parkingRemaining}대 / ${parkingTotal}대`}
        progress={parkingOccupiedPercent}
        progressColor="bg-brand"
        desc="주차 공간이 한정되어 대중교통 이용을 권장합니다."
      />
      <StatCard
        href="/apply/register"
        icon="📝"
        label="사전등록 현황"
        badge="실시간 (예시)"
        value={`${registerCurrent.toLocaleString()}명`}
        progress={registerPercent}
        progressColor="bg-brand"
        desc={`목표 ${registerTotal.toLocaleString()}명 대비 ${registerPercent}%`}
      />
    </div>
  );
}
