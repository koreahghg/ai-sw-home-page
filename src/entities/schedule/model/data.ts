export interface TimelineItem {
  time: string;
  title: string;
  location: string;
  detail: string[];
  date: "10.31(토)" | "11.1(일)";
}

export const timeline: TimelineItem[] = [
  {
    time: "09:30~10:00",
    title: "개막식",
    location: "메인 홀",
    detail: ["인사말씀", "운영안내 및 안전교육"],
    date: "10.31(토)",
  },
  {
    time: "10:00~17:00",
    title: "체험 부스 운영",
    location: "1·2층 전시장",
    detail: ["AI·SW 체험 부스 상시 운영"],
    date: "10.31(토)",
  },
  {
    time: "10:30~12:00",
    title: "교사 연수 ①",
    location: "연수실 A",
    detail: ["AI 수업설계 실습"],
    date: "10.31(토)",
  },
  {
    time: "13:00~14:00",
    title: "AI·SW 골든벨 (오후 회차)",
    location: "골든벨 강당",
    detail: ["초등부·중등부 예선"],
    date: "10.31(토)",
  },
  {
    time: "14:00~15:00",
    title: "미래교육 특강",
    location: "세미나실",
    detail: ["“AI 시대의 교실”"],
    date: "10.31(토)",
  },
  {
    time: "16:00",
    title: "AI교육원 탐방 (오전 회차 마감)",
    location: "AI교육원",
    detail: ["회차별 40명 한정 운영"],
    date: "10.31(토)",
  },
  {
    time: "09:30~16:00",
    title: "체험 부스 운영",
    location: "1·2층 전시장",
    detail: ["AI·SW 체험 부스 상시 운영"],
    date: "11.1(일)",
  },
  {
    time: "10:30~12:00",
    title: "AI교육원 탐방",
    location: "AI교육원",
    detail: ["실제 AI교육원 시설 견학 프로그램"],
    date: "11.1(일)",
  },
  {
    time: "11:00~12:00",
    title: "미래교육 특강",
    location: "세미나실",
    detail: ["“학교 현장의 AI 도입 사례”"],
    date: "11.1(일)",
  },
  {
    time: "13:30~15:00",
    title: "교사 연수 ②",
    location: "연수실 A",
    detail: ["데이터 기반 학습 분석"],
    date: "11.1(일)",
  },
  {
    time: "14:00~15:00",
    title: "AI·SW 골든벨 (결선)",
    location: "골든벨 강당",
    detail: ["초등부·중등부 결선"],
    date: "11.1(일)",
  },
  {
    time: "15:30~16:00",
    title: "폐막식",
    location: "메인 홀",
    detail: ["폐회 및 정리"],
    date: "11.1(일)",
  },
];
