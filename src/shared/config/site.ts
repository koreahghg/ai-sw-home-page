import type { Metadata } from "next";

export const SITE_NAME = "2026 전남광주통합특별시교육청 AI미래교육박람회";

export const SITE_URL = "https://aisw2-3csc.vercel.app";

export const SITE_DESCRIPTION =
  "학생·학부모와 교원을 위한 2026 전남광주통합특별시교육청 AI미래교육박람회 공식 홈페이지 - 체험 부스, AI·SW 골든벨, 교사 연수, 미래교육 특강 사전신청 안내";

export function absoluteUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      locale: "ko_KR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
