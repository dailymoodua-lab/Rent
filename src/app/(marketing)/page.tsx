import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AutoRent — прокат авто в Варшаве",
  description: "Прокат автомобилей в Варшаве. Более 50 авто на выбор, страховка включена, без залога. Быстрое оформление от 3 минут.",
  openGraph: {
    title: "AutoRent — прокат авто в Варшаве",
    description: "Более 50 авто на выбор. Страховка включена, без залога, доставка в аэропорт.",
    images: [{ url: "https://car-rent.ua/wp-content/uploads/2024/01/toyota-camry-55.png" }],
  },
};

import Image from "next/image";
import Link from "next/link";
import CarCard from "@/components/CarCard";
import SearchForm from "@/components/home/SearchForm";
import { CARS as ALL_CARS } from "@/data/cars";

/* ─── 6 популярных авто для главной ─── */
const CARS = ALL_CARS.slice(0, 6);
const HERO_IMAGE_SRC = process.env.GITHUB_PAGES === "true"
  ? "/Rent/images/hero-bg.jpg"
  : "/images/hero-bg.jpg";

/* ─── Преимущества ─── */
const BENEFITS = [
  {
    title: "Страховка включена",
    description: "Полная КАСКО и ответственность перед третьими лицами без доплат.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Без залога",
    description: "Не замораживаем деньги на карте. Никаких скрытых депозитов.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "Доставка авто",
    description: "Привезём автомобиль в аэропорт, отель или любой адрес в городе.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Поддержка 24/7",
    description: "Звоните в любое время — менеджер ответит в течение 2 минут.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

/* ─── Страница ─── */
export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[600px] overflow-hidden bg-slate-950 lg:min-h-[680px]">

        {/* Фоновое фото */}
        <Image
          src={HERO_IMAGE_SRC}
          alt="Прокат авто в Варшаве"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />

        {/* Градиент поверх фото */}
        <div className="absolute inset-0 bg-hero-gradient" />

        {/* Контент */}
        <div className="relative mx-auto flex min-h-[600px] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:min-h-[680px]">
          <div className="max-w-xl">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-wider text-slate-200 backdrop-blur-sm">
              Варшава · Быстро · Удобно
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Прокат авто<br />
              <span className="text-brand-500">в Варшаве</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Более 50 автомобилей на выбор. Страховка включена,<br className="hidden sm:block" />
              без залога, доставка в аэропорт.
            </p>

            {/* Форма поиска */}
            <SearchForm />

            {/* Доверительные метрики */}
            <div className="mt-6 flex flex-wrap gap-6">
              {[["50+", "авто в парке"], ["4.9★", "рейтинг клиентов"], ["3 мин", "оформление"]].map(
                ([val, label]) => (
                  <div key={label}>
                    <p className="text-xl font-bold text-white">{val}</p>
                    <p className="text-xs text-slate-400">{label}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          КАТАЛОГ
      ═══════════════════════════════════════ */}
      <section className="bg-[#F8F7F4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          {/* Заголовок секции */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-brand-600">
                Автопарк
              </p>
              <h2 className="mt-1 text-3xl font-black text-slate-900 sm:text-4xl">
                Популярные автомобили
              </h2>
            </div>
            <Link
              href="/catalog"
              className="flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              Весь каталог
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Карточки */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CARS.map((car) => (
              <CarCard key={car.slug} {...car} />
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          ПРЕИМУЩЕСТВА
      ═══════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-brand-600">
              Почему мы
            </p>
            <h2 className="mt-1 text-3xl font-black text-slate-900 sm:text-4xl">
              Аренда без лишних забот
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
              Мы берём на себя всё — от страховки до доставки. Ваша задача — просто ехать.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA-БАННЕР
      ═══════════════════════════════════════ */}
      <section className="bg-brand-600 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-black text-white sm:text-3xl">
            Готовы к поездке?
          </h2>
          <p className="mt-3 text-base text-indigo-200">
            Бронируйте онлайн за 3 минуты. Получите авто сегодня.
          </p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/catalog"
              className="w-full rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-brand-600 transition-colors hover:bg-slate-50 sm:w-auto"
            >
              Выбрать авто
            </Link>
            <a
              href="tel:+48000000000"
              className="w-full rounded-xl border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white sm:w-auto"
            >
              +48 000 000 000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
