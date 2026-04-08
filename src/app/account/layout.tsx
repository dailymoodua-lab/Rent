import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const accountNav = [
  { label: "Мои брони", href: "/account/bookings" },
  { label: "Профиль", href: "/account/profile" },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex gap-8">
          {/* Боковое меню кабинета */}
          <aside className="w-48 shrink-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Кабинет
            </p>
            <nav className="flex flex-col gap-1">
              {accountNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded px-3 py-2 text-sm hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Контент */}
          <main className="flex-1">{children}</main>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
