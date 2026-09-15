import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import GuideDirectionsPage from "@/views/guide-directions/ui/GuideDirectionsPage";

export const metadata: Metadata = buildMetadata({
  title: "오시는 길",
  description: "대중교통·자가용 등 행사장까지 오시는 방법을 안내합니다.",
  path: "/guide/directions",
});

export default function Page() {
  return <GuideDirectionsPage />;
}
