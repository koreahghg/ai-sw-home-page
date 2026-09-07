export interface Notice {
  id: string;
  title: string;
  date: string;
  pinned?: boolean;
}

export const notices: Notice[] = [
  { id: "n1", title: "[필독] 2026 전남광주 AI·SW체험한마당 사전신청 안내", date: "2026.08.20", pinned: true },
  { id: "n2", title: "학생 사전등록 오전 시간대 마감 임박 안내", date: "2026.09.01" },
  { id: "n3", title: "교사 연수 프로그램별 정원 조기 마감 안내", date: "2026.08.28" },
  { id: "n4", title: "박람회 당일 주차 공간 부족 예상 - 대중교통 이용 권장", date: "2026.08.25" },
  { id: "n5", title: "AI·SW 골든벨 참가자 유의사항 공지", date: "2026.08.18" },
];
