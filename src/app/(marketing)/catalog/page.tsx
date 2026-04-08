import type { Metadata } from "next";
import { Suspense } from "react";
import CatalogClient from "./components/CatalogClient";

export const metadata: Metadata = {
  title: "Каталог авто — аренда от 89 zł/день",
  description: "Каталог автомобилей для аренды в Варшаве. Эконом, комфорт, бизнес, премиум и SUV. Фильтрация по цене, категории и коробке передач.",
  openGraph: {
    title: "Каталог авто в Варшаве — AutoRent",
    description: "12+ автомобилей на выбор. Аренда от 89 zł/день. Страховка включена.",
    images: [{ url: "https://car-rent.ua/wp-content/uploads/2024/01/toyota-camry-55.png" }],
  },
};

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8F7F4]" />}>
      <CatalogClient />
    </Suspense>
  );
}
