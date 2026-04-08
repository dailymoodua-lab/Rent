"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryProps {
  mainImage: string;
  carName: string;
  slug: string;
}

// Пул реальных фото авто с Unsplash для миниатюр галереи
const UNSPLASH_POOL = [
  "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800", // Toyota Corolla
  "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800", // VW Passat
  "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",   // BMW 3
  "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800", // Skoda Octavia
  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800", // Mercedes C
  "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800", // Toyota RAV4
];

export default function Gallery({ mainImage, carName, slug }: GalleryProps) {
  // Выбираем 3 фото из пула детерминировано по slug
  const offset = slug.length % UNSPLASH_POOL.length;
  const images = [
    mainImage,
    UNSPLASH_POOL[offset % UNSPLASH_POOL.length],
    UNSPLASH_POOL[(offset + 2) % UNSPLASH_POOL.length],
    UNSPLASH_POOL[(offset + 4) % UNSPLASH_POOL.length],
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {/* Главное фото */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100">
        <Image
          src={images[active]}
          alt={carName}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain transition-opacity duration-300"
        />
      </div>

      {/* Миниатюры */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative aspect-[4/3] overflow-hidden rounded-xl border-2 transition-all ${
              active === i
                ? "border-brand-600 opacity-100"
                : "border-transparent opacity-60 hover:opacity-90"
            }`}
          >
            <Image
              src={src}
              alt={`${carName} фото ${i + 1}`}
              fill
              sizes="120px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
