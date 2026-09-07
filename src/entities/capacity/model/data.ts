export type CapacityStatus = "open" | "almost" | "closed";

export interface CapacitySlot {
  id: string;
  program: string;
  audience: "학생" | "교원";
  date: "10.31(토)" | "11.1(일)";
  time: "오전" | "오후";
  current: number;
  total: number;
  status: CapacityStatus;
}

export const STATUS_LABEL: Record<CapacityStatus, string> = {
  open: "접수중",
  almost: "마감임박",
  closed: "마감",
};

export const STATUS_STYLE: Record<CapacityStatus, string> = {
  open: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  almost: "bg-amber-50 text-amber-700 ring-amber-600/20",
  closed: "bg-gray-100 text-gray-500 ring-gray-500/20",
};

export const capacitySlots: CapacitySlot[] = [
  { id: "reg-3110am", program: "학생 사전등록", audience: "학생", date: "10.31(토)", time: "오전", current: 412, total: 500, status: "almost" },
  { id: "reg-3110pm", program: "학생 사전등록", audience: "학생", date: "10.31(토)", time: "오후", current: 260, total: 500, status: "open" },
  { id: "reg-311am", program: "학생 사전등록", audience: "학생", date: "11.1(일)", time: "오전", current: 500, total: 500, status: "closed" },
  { id: "reg-311pm", program: "학생 사전등록", audience: "학생", date: "11.1(일)", time: "오후", current: 188, total: 500, status: "open" },
  { id: "gb-3110pm", program: "AI·SW 골든벨", audience: "학생", date: "10.31(토)", time: "오후", current: 96, total: 100, status: "almost" },
  { id: "gb-311pm", program: "AI·SW 골든벨", audience: "학생", date: "11.1(일)", time: "오후", current: 54, total: 100, status: "open" },
  { id: "tour-3110am", program: "AI교육원 탐방", audience: "학생", date: "10.31(토)", time: "오전", current: 40, total: 40, status: "closed" },
  { id: "tour-311am", program: "AI교육원 탐방", audience: "학생", date: "11.1(일)", time: "오전", current: 21, total: 40, status: "open" },
  { id: "train-3110am", program: "교사 연수", audience: "교원", date: "10.31(토)", time: "오전", current: 58, total: 60, status: "almost" },
  { id: "train-311pm", program: "교사 연수", audience: "교원", date: "11.1(일)", time: "오후", current: 33, total: 60, status: "open" },
  { id: "lecture-3110pm", program: "미래교육 특강", audience: "교원", date: "10.31(토)", time: "오후", current: 120, total: 150, status: "open" },
  { id: "lecture-311am", program: "미래교육 특강", audience: "교원", date: "11.1(일)", time: "오전", current: 150, total: 150, status: "closed" },
];
