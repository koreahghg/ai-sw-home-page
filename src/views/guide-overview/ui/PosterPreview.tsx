import Image from "next/image";

export default function PosterPreview() {
  return (
    <div className="w-full shrink-0 sm:w-72">
      <div className="flex aspect-[210/297] w-full items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white">
        <Image src="/lg.png" alt="포스터 (임시)" width={643} height={154} className="w-full object-contain" />
      </div>
      <a
        href="/lg.png"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block w-full rounded-lg border border-gray-200 py-2 text-center text-sm font-semibold text-gray-600 transition hover:border-brand hover:bg-brand hover:text-white"
      >
        포스터 크게 보기
      </a>
    </div>
  );
}
