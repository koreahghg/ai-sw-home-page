export type CongestionLevel = "여유" | "보통" | "혼잡" | "매우 혼잡";

export const CONGESTION_STYLE: Record<CongestionLevel, { dot: string; text: string; bar: string }> = {
  "여유": { dot: "bg-emerald-500", text: "text-emerald-700", bar: "bg-emerald-500" },
  "보통": { dot: "bg-yellow-500", text: "text-yellow-700", bar: "bg-yellow-500" },
  "혼잡": { dot: "bg-orange-500", text: "text-orange-700", bar: "bg-orange-500" },
  "매우 혼잡": { dot: "bg-red-500", text: "text-red-700", bar: "bg-red-500" },
};

export interface CongestionZone {
  zone: string;
  level: CongestionLevel;
  percent: number;
}

export const congestionZones: CongestionZone[] = [
  { zone: "1층 체험 부스", level: "혼잡", percent: 82 },
  { zone: "2층 상설 체험", level: "보통", percent: 55 },
  { zone: "골든벨 강당", level: "여유", percent: 30 },
  { zone: "교사 연수실", level: "보통", percent: 48 },
];

export const congestionUpdatedAt = "14:20 기준";
