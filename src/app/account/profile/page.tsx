export const metadata = { title: "Мой профиль" };

export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Профиль</h1>

      {/* TODO: форма редактирования через React Hook Form + Zod */}
      <div className="mt-6 max-w-md space-y-4">
        {[
          { label: "Имя", placeholder: "Иван Иванов" },
          { label: "Телефон", placeholder: "+38 (000) 000-00-00" },
          { label: "Email", placeholder: "mail@example.com" },
        ].map(({ label, placeholder }) => (
          <div key={label}>
            <label className="mb-1 block text-sm font-medium">{label}</label>
            <input
              disabled
              placeholder={placeholder}
              className="w-full rounded border px-3 py-2 text-sm text-gray-400 bg-gray-50"
            />
          </div>
        ))}

        <button disabled className="rounded bg-blue-600 px-6 py-2 text-sm text-white opacity-50">
          Сохранить {/* TODO: подключить форму */}
        </button>
      </div>

      <div className="mt-10 border-t pt-6">
        <h2 className="font-semibold">Смена пароля</h2>
        <div className="mt-4 rounded border bg-gray-50 p-4 text-sm text-gray-400">
          TODO: форма смены пароля
        </div>
      </div>
    </div>
  );
}
