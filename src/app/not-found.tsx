import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница не найдена — AutoRent",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8F7F4] px-4 text-center">
      <p className="text-8xl font-black text-brand-600">404</p>
      <h1 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl">
        Страница не найдена
      </h1>
      <p className="mt-3 max-w-sm text-base text-slate-500">
        Такой страницы не существует или она была удалена.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-brand-600 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-700"
      >
        На главную
      </Link>
    </div>
  );
}
