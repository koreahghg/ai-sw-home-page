import type { CongestionLevel } from "@/entities/congestion/model/data";

export const parkingTotal = 500;
export const parkingRemaining = 68;
export const parkingOccupiedPercent = Math.round(((parkingTotal - parkingRemaining) / parkingTotal) * 100);

export const parkingCongestionLevel: CongestionLevel =
  parkingOccupiedPercent < 40 ? "여유" : parkingOccupiedPercent < 70 ? "보통" : "혼잡";
