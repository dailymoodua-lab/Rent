"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface BookingFormProps {
  pricePerDay: number;
}

function daysBetween(from: string, to: string): number {
  const a = new Date(from).getTime();
  const b = new Date(to).getTime();
  const diff = Math.round((b - a) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}

export default function BookingForm({ pricePerDay }: BookingFormProps) {
  const searchParams = useSearchParams();
  const today = new Date().toISOString().split("T")[0];
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    setDateFrom(searchParams.get("from") ?? "");
    setDateTo(searchParams.get("to") ?? "");
  }, [searchParams]);

  const days = dateFrom && dateTo ? daysBetween(dateFrom, dateTo) : 0;
  const total = days * pricePerDay;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!dateFrom || !dateTo || !location) {
      alert("Пожалуйста, заполните все поля");
      return;
    }
    alert(
      `Спасибо! Мы свяжемся с вами.\n\nДаты: ${formatDate(dateFrom)} — ${formatDate(dateTo)}\nМесто: ${location}\nСумма: ${total} zł`
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
    >
      <h3 className="mb-5 text-base font-bold text-slate-900">Забронировать</h3>

      <div className="flex flex-col gap-4">
        {/* Дата получения */}
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
            Дата получения
          </label>
          <input
            type="date"
            value={dateFrom}
            min={today}
            onChange={(e) => {
              setDateFrom(e.target.value);
              if (dateTo && e.target.value >= dateTo) setDateTo("");
            }}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>

        {/* Дата возврата */}
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
            Дата возврата
          </label>
          <input
            type="date"
            value={dateTo}
            min={dateFrom || today}
            onChange={(e) => setDateTo(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>

        {/* Место получения */}
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
            Место получения
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Аэропорт, адрес или офис"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>
      </div>

      {/* Итого */}
      <div className="mt-5 rounded-xl bg-slate-50 px-4 py-3">
        {days > 0 ? (
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">
              {pricePerDay} zł × {days} {days === 1 ? "день" : days < 5 ? "дня" : "дней"}
            </span>
            <span className="text-lg font-bold text-slate-900">{total} zł</span>
          </div>
        ) : (
          <p className="text-center text-sm text-slate-400">
            Выберите даты, чтобы увидеть стоимость
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-4 w-full rounded-xl bg-brand-600 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={!dateFrom || !dateTo || !location}
      >
        Забронировать
      </button>

      <p className="mt-3 text-center text-xs text-slate-400">
        Без предоплаты · Отмена бесплатно
      </p>
    </form>
  );
}
