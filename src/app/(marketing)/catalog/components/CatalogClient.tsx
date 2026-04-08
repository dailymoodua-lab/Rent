"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import CarCard from "@/components/CarCard";
import Filters, { DEFAULT_FILTERS, FilterState } from "./Filters";
import { CARS } from "@/data/cars";

type SortOption = "popular" | "price-asc" | "price-desc";

export default function CatalogClient() {
  const searchParams = useSearchParams();
  const dateFrom = searchParams.get("from") ?? "";
  const dateTo = searchParams.get("to") ?? "";
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [sort, setSort] = useState<SortOption>("popular");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const result = useMemo(() => {
    let list = CARS.filter((car) => {
      if (filters.category !== "Все" && car.category !== filters.category) return false;
      if (filters.transmission !== "Все" && car.transmission !== filters.transmission) return false;
      if (car.pricePerDay > filters.maxPrice) return false;
      return true;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => a.pricePerDay - b.pricePerDay);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.pricePerDay - a.pricePerDay);

    return list;
  }, [filters, sort]);

  return (
    <div className="bg-[#F8F7F4] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">

        {/* Заголовок страницы */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 sm:text-4xl">
            Каталог автомобилей
          </h1>

          {/* Даты из формы поиска */}
          {dateFrom && dateTo && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-brand-50 px-4 py-2 text-sm text-brand-700">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Аренда: <strong>{dateFrom}</strong> — <strong>{dateTo}</strong>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">

          {/* ── Сайдбар с фильтрами (десктоп) ── */}
          <div className="hidden lg:block w-60 shrink-0">
            <div className="sticky top-24 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <p className="mb-5 font-bold text-slate-900">Фильтры</p>
              <Filters filters={filters} onChange={setFilters} />
            </div>
          </div>

          {/* ── Основной контент ── */}
          <div className="flex-1 min-w-0">

            {/* Мобильная кнопка фильтров */}
            <div className="mb-4 lg:hidden">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="8" y1="12" x2="20" y2="12" />
                  <line x1="12" y1="18" x2="20" y2="18" />
                </svg>
                Фильтры
                {(filters.category !== "Все" || filters.transmission !== "Все" || filters.maxPrice < 500) && (
                  <span className="ml-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-[10px] text-white">
                    !
                  </span>
                )}
              </button>

              {/* Мобильная панель фильтров */}
              {filtersOpen && (
                <div className="mt-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <Filters filters={filters} onChange={(f) => { setFilters(f); }} />
                </div>
              )}
            </div>

            {/* Тулбар: счётчик + сортировка */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-500">
                Найдено{" "}
                <span className="font-bold text-slate-900">{result.length}</span>
                {" "}автомобилей
              </p>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Сортировать:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="popular">По популярности</option>
                  <option value="price-asc">Сначала дешевле</option>
                  <option value="price-desc">Сначала дороже</option>
                </select>
              </div>
            </div>

            {/* Сетка карточек */}
            {result.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {result.map((car) => (
                  <CarCard
                    key={car.id}
                    slug={car.slug}
                    name={car.name}
                    category={car.category}
                    transmission={car.transmission}
                    seats={car.seats}
                    pricePerDay={car.pricePerDay}
                    imageUrl={car.imageUrl}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center rounded-2xl border border-dashed border-slate-200 bg-white py-20 text-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.5" className="text-slate-300">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <p className="mt-4 font-semibold text-slate-700">Ничего не найдено</p>
                <p className="mt-1 text-sm text-slate-400">Попробуйте изменить или сбросить фильтры</p>
                <button
                  onClick={() => setFilters(DEFAULT_FILTERS)}
                  className="mt-5 rounded-xl bg-brand-600 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-700"
                >
                  Сбросить фильтры
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
