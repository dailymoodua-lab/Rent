import Link from "next/link";

const LINKS = [
  {
    title: "Прокат",
    items: [
      { label: "Каталог авто", href: "/catalog" },
      { label: "Условия аренды", href: "/conditions" },
      { label: "Тарифы", href: "/services" },
      { label: "Под выкуп", href: "/buyout" },
    ],
  },
  {
    title: "Компания",
    items: [
      { label: "О нас", href: "/about" },
      { label: "Отзывы", href: "/reviews" },
      { label: "Для бизнеса", href: "/business" },
      { label: "Блог", href: "/blog" },
    ],
  },
  {
    title: "Помощь",
    items: [
      { label: "Контакты", href: "/contacts" },
      { label: "Личный кабинет", href: "/account" },
      { label: "Мои брони", href: "/account/bookings" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Бренд */}
          <div>
            <Link href="/" className="flex items-baseline gap-0.5">
              <span className="text-xl font-black text-brand-500">AUTO</span>
              <span className="text-xl font-black text-white">RENT</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Прокат автомобилей в Варшаве. Страховка включена, без скрытых доплат.
            </p>

            {/* Соцсети */}
            <div className="mt-5 flex gap-3">
              {/* Instagram */}
              <a href="#" aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-brand-600 hover:text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-brand-600 hover:text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Telegram */}
              <a href="#" aria-label="Telegram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-brand-600 hover:text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Ссылки */}
          {LINKS.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}
                      className="text-sm transition-colors hover:text-slate-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Нижняя строка */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} AutoRent. Все права защищены.
          </p>
          <div className="flex gap-5 text-xs text-slate-600">
            <Link href="/conditions" className="hover:text-slate-400">Условия аренды</Link>
            <Link href="/contacts" className="hover:text-slate-400">Контакты</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
