import type { Metadata } from "next";
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

interface PageProps {
  searchParams: { from?: string; to?: string };
}

export default function CatalogPage({ searchParams }: PageProps) {
  return (
    <CatalogClient
      dateFrom={searchParams.from}
      dateTo={searchParams.to}
    />
  );
}
