export interface TimelineItem {
  time: string;
  title: string;
  category: "개막" | "학생" | "교사" | "공통";
  location: string;
  date: "10.31(금)" | "11.1(토)";
}

export const CATEGORY_STYLE: Record<TimelineItem["category"], string> = {
  "개막": "bg-indigo-600 text-white",
  "학생": "bg-sky-100 text-sky-700",
  "교사": "bg-violet-100 text-violet-700",
  "공통": "bg-gray-100 text-gray-700",
};

export const timeline: TimelineItem[] = [
  { time: "09:30", title: "개막식", category: "개막", location: "메인 홀", date: "10.31(금)" },
  { time: "10:00", title: "체험 부스 운영 시작", category: "공통", location: "1·2층 전시장", date: "10.31(금)" },
  { time: "10:30", title: "교사 연수 ① AI 수업설계 실습", category: "교사", location: "연수실 A", date: "10.31(금)" },
  { time: "13:00", title: "AI·SW 골든벨 (오후 회차)", category: "학생", location: "골든벨 강당", date: "10.31(금)" },
  { time: "14:00", title: "미래교육 특강: AI 시대의 교실", category: "교사", location: "세미나실", date: "10.31(금)" },
  { time: "16:00", title: "AI교육원 탐방 (오전 회차 마감)", category: "학생", location: "AI교육원", date: "10.31(금)" },
  { time: "10:00", title: "체험 부스 운영 시작", category: "공통", location: "1·2층 전시장", date: "11.1(토)" },
  { time: "10:30", title: "AI교육원 탐방", category: "학생", location: "AI교육원", date: "11.1(토)" },
  { time: "11:00", title: "미래교육 특강: 학교 현장의 AI 도입 사례", category: "교사", location: "세미나실", date: "11.1(토)" },
  { time: "13:30", title: "교사 연수 ② 데이터 기반 학습 분석", category: "교사", location: "연수실 A", date: "11.1(토)" },
  { time: "14:00", title: "AI·SW 골든벨 (결선)", category: "학생", location: "골든벨 강당", date: "11.1(토)" },
  { time: "16:30", title: "폐막식", category: "개막", location: "메인 홀", date: "11.1(토)" },
];
