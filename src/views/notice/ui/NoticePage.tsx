import PageHero from "@/shared/ui/PageHero";
import NoticeBoard from "@/features/notice-board/ui/NoticeBoard";

export default function NoticePage() {
  return (
    <div>
      <PageHero title="알림마당" desc="공지사항, 자주 묻는 질문, 주차 안내를 확인하세요." />
      <NoticeBoard />
    </div>
  );
}
