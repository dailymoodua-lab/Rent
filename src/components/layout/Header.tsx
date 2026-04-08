import Link from "next/link";
import MobileMenu from "./MobileMenu";

const NAV = [
  { label: "Каталог", href: "/catalog" },
  { label: "Условия", href: "/conditions" },
  { label: "Услуги", href: "/services" },
  { label: "О нас", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* Логотип */}
        <Link href="/" className="flex shrink-0 items-baseline gap-0.5">
          <span className="text-xl font-black tracking-tight text-brand-600">AUTO</span>
          <span className="text-xl font-black tracking-tight text-slate-900">RENT</span>
          <span className="ml-1.5 hidden text-xs font-medium text-slate-400 sm:block">
            Варшава
          </span>
        </Link>

        {/* Навигация — центр */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Правая часть */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href="tel:+48000000000"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-brand-600"
          >
            +48 000 000 000
          </a>
          <Link
            href="/catalog"
            className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Забронировать
          </Link>
        </div>

        {/* Мобильное меню */}
        <MobileMenu nav={NAV} />
      </div>
    </header>
  );
}
