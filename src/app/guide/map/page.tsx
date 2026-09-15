import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import GuideMapPage from "@/views/guide-map/ui/GuideMapPage";

export const metadata: Metadata = buildMetadata({
  title: "부스 배치도",
  description: "전시장 층별 부스 위치와 체험존 배치를 확인하세요.",
  path: "/guide/map",
});

export default function Page() {
  return <GuideMapPage />;
}
