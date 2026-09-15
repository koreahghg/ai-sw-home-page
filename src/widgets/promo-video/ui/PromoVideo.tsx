import { PROMO_YOUTUBE_ID } from "@/shared/config/promo-video";

export default function PromoVideo() {
  if (!PROMO_YOUTUBE_ID) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-gray-300 bg-white text-gray-400">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl">▶</span>
        <p className="text-sm">홍보 영상 준비중입니다</p>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-gray-100 bg-black">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${PROMO_YOUTUBE_ID}`}
        title="2026 전남광주통합특별시교육청 AI미래교육박람회 홍보 영상"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
