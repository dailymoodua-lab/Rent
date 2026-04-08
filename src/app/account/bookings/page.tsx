import Link from "next/link";

export const metadata = { title: "Мои брони" };

// TODO: заменить на реальные данные из БД (текущего пользователя)
const MOCK_BOOKINGS = [
  { id: "001", car: "Toyota Camry", dateFrom: "10.04.2026", dateTo: "13.04.2026", status: "active" },
  { id: "002", car: "Volkswagen Polo", dateFrom: "01.03.2026", dateTo: "03.03.2026", status: "done" },
];

const STATUS_LABELS: Record<string, string> = {
  pending: "Ожидает",
  active: "Активна",
  done: "Завершена",
  cancelled: "Отменена",
};

export default function BookingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Мои брони</h1>

      {MOCK_BOOKINGS.length === 0 ? (
        <div className="mt-8 text-center text-gray-400">
          <p>У вас ещё нет броней.</p>
          <Link href="/catalog" className="mt-4 inline-block text-blue-600 hover:underline">
            Перейти в каталог
          </Link>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {MOCK_BOOKINGS.map((b) => (
            <div key={b.id} className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <p className="font-semibold">{b.car}</p>
                <p className="text-sm text-gray-500">{b.dateFrom} — {b.dateTo}</p>
                <span className="mt-1 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs">
                  {STATUS_LABELS[b.status] ?? b.status}
                </span>
              </div>
              {b.status === "active" && (
                <button className="rounded border px-4 py-2 text-sm text-red-500 hover:bg-red-50">
                  Отменить {/* TODO: действие отмены */}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
