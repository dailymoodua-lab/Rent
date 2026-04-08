"use client";

import { useState } from "react";

type Status = "idle" | "success";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Введите имя";
    if (!phone.trim()) e.phone = "Введите телефон";
    if (!message.trim()) e.message = "Введите сообщение";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-100 bg-green-50 px-8 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-bold text-slate-900">Спасибо!</h3>
        <p className="mt-2 text-base text-slate-500">
          Мы перезвоним в течение 15 минут.
        </p>
        <button
          onClick={() => { setStatus("idle"); setName(""); setPhone(""); setMessage(""); }}
          className="mt-6 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
        >
          Отправить ещё раз
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Имя */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
          Имя
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: "" })); }}
          placeholder="Ваше имя"
          className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 ${
            errors.name ? "border-red-400 bg-red-50" : "border-slate-200 bg-white"
          }`}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      {/* Телефон */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
          Телефон
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: "" })); }}
          placeholder="+48 000 000 000"
          className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 ${
            errors.phone ? "border-red-400 bg-red-50" : "border-slate-200 bg-white"
          }`}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
      </div>

      {/* Сообщение */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
          Сообщение
        </label>
        <textarea
          value={message}
          onChange={(e) => { setMessage(e.target.value); setErrors((p) => ({ ...p, message: "" })); }}
          placeholder="Задайте вопрос или опишите задачу..."
          rows={4}
          className={`w-full resize-none rounded-xl border px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 ${
            errors.message ? "border-red-400 bg-red-50" : "border-slate-200 bg-white"
          }`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="mt-1 w-full rounded-xl bg-brand-600 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-700"
      >
        Отправить
      </button>
    </form>
  );
}
