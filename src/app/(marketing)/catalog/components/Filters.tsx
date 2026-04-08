"use client";

import { CATEGORIES, PRICE_MAX, PRICE_MIN, TRANSMISSIONS } from "@/data/cars";
import type { Category, Transmission } from "@/data/cars";

export interface FilterState {
  category: "Все" | Category;
  transmission: "Все" | Transmission;
  maxPrice: number;
}

export const DEFAULT_FILTERS: FilterState = {
  category: "Все",
  transmission: "Все",
  maxPrice: PRICE_MAX,
};

interface FiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

export default function Filters({ filters, onChange }: FiltersProps) {
  const isDefault =
    filters.category === "Все" &&
    filters.transmission === "Все" &&
    filters.maxPrice === PRICE_MAX;

  return (
    <aside className="flex flex-col gap-6">

      {/* Категория */}
      <div>
        <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Категория
        </p>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onChange({ ...filters, category: cat })}
              className={`rounded-xl px-3.5 py-1.5 text-sm font-medium transition-colors ${
                filters.category === cat
                  ? "bg-brand-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Коробка передач */}
      <div>
        <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Коробка передач
        </p>
        <div className="flex gap-2">
          {TRANSMISSIONS.map((tr) => (
            <button
              key={tr}
              onClick={() => onChange({ ...filters, transmission: tr })}
              className={`rounded-xl px-4 py-1.5 text-sm font-medium transition-colors ${
                filters.transmission === tr
                  ? "bg-brand-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tr}
            </button>
          ))}
        </div>
      </div>

      {/* Цена */}
      <div>
        <div className="mb-2.5 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Цена до
          </p>
          <span className="text-sm font-bold text-slate-800">
            {filters.maxPrice} zł/день
          </span>
        </div>
        <input
          type="range"
          min={PRICE_MIN}
          max={PRICE_MAX}
          step={10}
          value={filters.maxPrice}
          onChange={(e) =>
            onChange({ ...filters, maxPrice: Number(e.target.value) })
          }
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-600"
        />
        <div className="mt-1 flex justify-between text-xs text-slate-400">
          <span>{PRICE_MIN} zł</span>
          <span>{PRICE_MAX} zł</span>
        </div>
      </div>

      {/* Сброс */}
      {!isDefault && (
        <button
          onClick={() => onChange(DEFAULT_FILTERS)}
          className="flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-brand-600"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          Сбросить фильтры
        </button>
      )}

    </aside>
  );
}
