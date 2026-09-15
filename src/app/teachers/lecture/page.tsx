import type { Metadata } from "next";
import { buildMetadata } from "@/shared/config/site";
import TeachersLecturePage from "@/views/teachers-lecture/ui/TeachersLecturePage";

export const metadata: Metadata = buildMetadata({
  title: "미래교육 특강",
  description: "10.31(토) 오전 11시 진행되는 미래교육 특강입니다. 선착순 300명 참여 가능합니다.",
  path: "/teachers/lecture",
});

export default function Page() {
  return <TeachersLecturePage />;
}
