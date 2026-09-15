import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
      <p className="text-7xl font-black text-brand sm:text-8xl">404</p>
      <h1 className="mt-4 text-2xl font-black text-gray-900 sm:text-3xl">페이지를 찾을 수 없습니다</h1>
      <p className="mt-3 max-w-md text-sm text-gray-500 sm:text-base">
        요청하신 페이지가 삭제되었거나 잘못된 주소일 수 있습니다.
        <br />
        준비 중인 페이지일 수도 있으니 잠시 후 다시 시도해 주세요.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
