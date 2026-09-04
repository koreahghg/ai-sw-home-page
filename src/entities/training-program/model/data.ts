export interface TrainingProgram {
  id: string;
  title: string;
  desc: string;
  time: string;
}

export const trainingPrograms: TrainingProgram[] = [
  { id: "p1", title: "① AI 수업설계 실습", desc: "생성형 AI를 활용한 수업 설계 워크숍", time: "10.31(금) 오전" },
  { id: "p2", title: "② 데이터 기반 학습 분석", desc: "학습 데이터를 활용한 맞춤형 피드백 실습", time: "11.1(토) 오후" },
  { id: "p3", title: "③ AI 윤리와 디지털 리터러시", desc: "교실에서의 AI 윤리 교육 사례 공유", time: "11.1(토) 오전" },
];
