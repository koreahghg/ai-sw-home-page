export interface Lecture {
  id: string;
  title: string;
  time: string;
}

export const lectures: Lecture[] = [
  { id: "l1", title: "AI 시대의 교실", time: "10.31(금) 오후, 세미나실" },
  { id: "l2", title: "학교 현장의 AI 도입 사례", time: "11.1(토) 오전, 세미나실" },
];
