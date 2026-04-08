import { notFound } from "next/navigation";
import Link from "next/link";
import { CARS } from "@/data/cars";
import CarCard from "@/components/CarCard";
import Gallery from "./components/Gallery";
import BookingForm from "./components/BookingForm";

interface Props {
  params: { slug: string };
  searchParams: { from?: string; to?: string };
}

/* Статическая генерация всех страниц авто */
export function generateStaticParams() {
  return CARS.map((car) => ({ slug: car.slug }));
}

export function generateMetadata({ params }: Props) {
  const car = CARS.find((c) => c.slug === params.slug);
  if (!car) return { title: "Авто не найдено" };
  return {
    title: `${car.name} — аренда от ${car.pricePerDay} zł/день | AutoRent`,
    description: `Аренда ${car.name} в Варшаве. ${car.category}, ${car.transmission}, ${car.fuel}. Страховка включена, без залога. Цена от ${car.pricePerDay} zł/день.`,
    openGraph: {
      title: `${car.name} — прокат в Варшаве`,
      description: `${car.category} · ${car.transmission} · от ${car.pricePerDay} zł/день`,
      images: [{ url: car.imageUrl }],
    },
  };
}

/* Сетка характеристик */
const SPECS_ICONS = {
  transmission: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  ),
  seats: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  fuel: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 22V8a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v14" />
      <path d="M14 10h1a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L19 6" />
      <line x1="3" y1="22" x2="14" y2="22" />
    </svg>
  ),
  doors: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="2" width="18" height="20" rx="2" /><circle cx="14.5" cy="12" r="0.5" fill="currentColor" />
    </svg>
  ),
  climate: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07l14.14-14.14" />
    </svg>
  ),
  drive: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

export default function CarPage({ params, searchParams }: Props) {
  const car = CARS.find((c) => c.slug === params.slug);
  if (!car) notFound();

  const similar = CARS.filter(
    (c) => c.category === car.category && c.slug !== car.slug
  ).slice(0, 3);

  const specs = [
    { icon: SPECS_ICONS.transmission, label: "Коробка",   value: car.transmission },
    { icon: SPECS_ICONS.seats,        label: "Мест",      value: String(car.seats) },
    { icon: SPECS_ICONS.fuel,         label: "Топливо",   value: car.fuel },
    { icon: SPECS_ICONS.doors,        label: "Дверей",    value: "4" },
    { icon: SPECS_ICONS.climate,      label: "Климат",    value: "Есть" },
    { icon: SPECS_ICONS.drive,        label: "Привод",    value: "Передний" },
  ];

  return (
    <div className="bg-[#F8F7F4] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">

        {/* Хлебные крошки */}
        <nav className="mb-6 flex items-center gap-1.5 text-sm text-slate-400">
          <Link href="/" className="hover:text-brand-600 transition-colors">Главная</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-brand-600 transition-colors">Каталог</Link>
          <span>/</span>
          <span className="font-medium text-slate-700">{car.name}</span>
        </nav>

        {/* Основная сетка */}
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* ── Левая колонка: галерея + характеристики ── */}
          <div className="flex flex-col gap-6">

            <Gallery
              mainImage={car.imageUrl}
              carName={car.name}
              slug={car.slug}
            />

            {/* Характеристики */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="mb-4 font-bold text-slate-900">Характеристики</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {specs.map(({ icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"
                  >
                    <span className="shrink-0 text-brand-600">{icon}</span>
                    <div>
                      <p className="text-[11px] text-slate-400">{label}</p>
                      <p className="text-sm font-semibold text-slate-800">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Правая колонка: инфо + форма ── */}
          <div className="flex flex-col gap-5">

            {/* Инфо об авто */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

              {/* Категория badge */}
              <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                {car.category}
              </span>

              {/* Название */}
              <h1 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
                {car.name}
              </h1>

              {/* Рейтинг */}
              <div className="mt-2 flex items-center gap-2">
                <div className="flex text-amber-400">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} className="text-sm">{s}</span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-slate-700">4.9</span>
                <span className="text-sm text-slate-400">· 24 отзыва</span>
              </div>

              {/* Цена */}
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">{car.pricePerDay}</span>
                <span className="text-lg font-medium text-slate-500">zł / день</span>
              </div>

              {/* Что включено */}
              <div className="mt-4 flex flex-col gap-2">
                {[
                  "Страховка КАСКО включена",
                  "Без залога",
                  "Пробег без ограничений",
                  "Помощь на дороге 24/7",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                      strokeLinejoin="round" className="shrink-0 text-brand-600">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Форма бронирования */}
            <BookingForm
              pricePerDay={car.pricePerDay}
              initialDateFrom={searchParams.from}
              initialDateTo={searchParams.to}
            />

          </div>
        </div>

        {/* ── Похожие авто ── */}
        {similar.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 text-2xl font-black text-slate-900">
              Похожие автомобили
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((c) => (
                <CarCard
                  key={c.id}
                  slug={c.slug}
                  name={c.name}
                  category={c.category}
                  transmission={c.transmission}
                  seats={c.seats}
                  pricePerDay={c.pricePerDay}
                  imageUrl={c.imageUrl}
                />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
