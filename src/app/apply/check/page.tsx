import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import ApplyCheckPage from "@/views/apply-check/ui/ApplyCheckPage";

export const metadata: Metadata = buildMetadata({
  title: "신청 내역 조회 · 취소",
  description: "신청 시 등록한 휴대폰 번호로 나의 모든 신청 내역을 확인하고 취소할 수 있습니다.",
  path: "/apply/check",
});

export default function Page() {
  return <ApplyCheckPage />;
}
