"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const router = useRouter();
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (dateFrom) params.set("from", dateFrom);
    if (dateTo) params.set("to", dateTo);
    router.push(`/catalog?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex flex-col gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm sm:flex-row sm:items-end sm:gap-3 sm:p-5"
    >
      <div className="flex flex-1 flex-col gap-1">
        <label className="text-xs font-medium uppercase tracking-wider text-slate-300">
          Дата начала
        </label>
        <input
          type="date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
          className="rounded-xl border-0 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <label className="text-xs font-medium uppercase tracking-wider text-slate-300">
          Дата окончания
        </label>
        <input
          type="date"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
          min={dateFrom || new Date().toISOString().split("T")[0]}
          className="rounded-xl border-0 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>

      <button
        type="submit"
        className="shrink-0 rounded-xl bg-brand-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:py-[13px]"
      >
        Найти авто
      </button>
    </form>
  );
}
