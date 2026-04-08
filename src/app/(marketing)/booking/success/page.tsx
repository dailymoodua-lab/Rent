import Link from "next/link";

export const metadata = { title: "Бронирование подтверждено" };

export default function BookingSuccessPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      {/* TODO: иконка успеха */}
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
        ✓
      </div>

      <h1 className="text-2xl font-bold">Бронирование подтверждено!</h1>
      <p className="mt-2 text-gray-500">TODO: номер брони, авто, даты, адрес получения</p>

      <div className="mt-6 rounded border bg-gray-50 p-6 text-left text-sm text-gray-400">
        <p>Номер брони: <strong>#TODO</strong></p>
        <p>Авто: TODO</p>
        <p>Даты: TODO — TODO</p>
        <p>Адрес: TODO</p>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <Link href="/account/bookings" className="rounded bg-blue-600 px-6 py-3 text-sm text-white hover:bg-blue-700">
          Мои брони
        </Link>
        <Link href="/" className="rounded border px-6 py-3 text-sm hover:bg-gray-50">
          На главную
        </Link>
      </div>
    </div>
  );
}
