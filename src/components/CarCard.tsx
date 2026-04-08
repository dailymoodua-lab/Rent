import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  slug: string;
  name: string;
  category: string;
  transmission: string;
  seats: number;
  pricePerDay: number;
  imageUrl: string;
}

export default function CarCard({
  slug,
  name,
  category,
  transmission,
  seats,
  pricePerDay,
  imageUrl,
}: CarCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md">

      {/* Фото */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Контент */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>

        {/* Характеристики */}
        <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" className="shrink-0">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            {transmission}
          </span>
          <span className="text-slate-200">|</span>
          <span className="flex items-center gap-1">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" className="shrink-0">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            {seats} мест
          </span>
        </div>

        {/* Цена + кнопка */}
        <div className="mt-auto flex items-end justify-between pt-5">
          <div>
            <span className="text-2xl font-bold text-slate-900">{pricePerDay} €</span>
            <span className="ml-1 text-sm text-slate-400">/ день</span>
          </div>
          <Link
            href={`/car/${slug}`}
            className="rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Забронировать
          </Link>
        </div>
      </div>

    </article>
  );
}
