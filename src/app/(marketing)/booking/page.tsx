import Link from "next/link";

export const metadata = { title: "Оформление бронирования" };

const STEPS = ["Авто и даты", "Данные клиента", "Оплата"];

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-3xl font-bold">Бронирование</h1>

      {/* Индикатор шагов */}
      <div className="mt-6 flex items-center gap-2">
        {STEPS.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
              i === 0 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
            }`}>
              {i + 1}
            </div>
            <span className={`text-sm ${i === 0 ? "font-semibold" : "text-gray-400"}`}>
              {step}
            </span>
            {i < STEPS.length - 1 && <div className="mx-2 h-px w-8 bg-gray-300" />}
          </div>
        ))}
      </div>

      {/* TODO: StepIndicator + шаги как отдельные компоненты */}
      <div className="mt-8 rounded border bg-gray-50 p-6 text-sm text-gray-400">
        <p>Шаг 1: TODO: выбранное авто + даты + расчёт суммы</p>
      </div>

      <div className="mt-6 flex justify-between">
        <Link href="/catalog" className="rounded border px-6 py-3 text-sm hover:bg-gray-50">
          ← Назад к каталогу
        </Link>
        <Link href="/booking/success" className="rounded bg-blue-600 px-6 py-3 text-sm text-white hover:bg-blue-700">
          Далее →
        </Link>
      </div>
    </div>
  );
}
