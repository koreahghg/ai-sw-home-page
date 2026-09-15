import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import NoticeParkingPage from "@/views/notice-parking/ui/NoticeParkingPage";

export const metadata: Metadata = buildMetadata({
  title: "주차장 안내",
  description: "행사장 주차장 안내를 확인하세요.",
  path: "/notice/parking",
});

export default function Page() {
  return <NoticeParkingPage />;
}
