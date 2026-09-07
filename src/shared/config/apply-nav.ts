export const applyNavItems = [
  { key: "hub", label: "전체 신청 보기", href: "/apply" },
  {
    key: "register",
    label: "학생 사전등록",
    shortLabel: "사전등록",
    href: "/apply/register",
    badge: { text: "학생", tone: "student" as const },
  },
  {
    key: "golden-bell",
    label: "AI·SW 골든벨 신청",
    shortLabel: "골든벨 신청",
    href: "/apply/golden-bell",
    badge: { text: "학생", tone: "student" as const },
  },
  {
    key: "ai-tour",
    label: "AI교육원 탐방 신청",
    shortLabel: "AI교육원 탐험 신청",
    href: "/apply/ai-tour",
    badge: { text: "학생", tone: "student" as const },
  },
  {
    key: "teacher-training",
    label: "교사 연수 신청",
    shortLabel: "연수 신청",
    href: "/apply/teacher-training",
    badge: { text: "교사", tone: "teacher" as const },
  },
  {
    key: "teacher-lecture",
    label: "미래교육 특강 신청",
    shortLabel: "특강 신청",
    href: "/apply/teacher-lecture",
    badge: { text: "교사", tone: "teacher" as const },
  },
  { key: "check", label: "신청 내역 조회·취소", href: "/apply/check" },
];
