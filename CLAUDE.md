# Car Rental — CLAUDE.md

## Проект
Сайт проката автомобилей в Варшаве. Один город. По образцу car-rent.ua.

## Стек
- **Next.js 14** (App Router, `/src/app`)
- **TypeScript** (strict mode)
- **Tailwind CSS** — стилизация, никаких CSS-модулей
- **PostgreSQL + Prisma** — БД и ORM (настроена, миграции не запущены)
- **NextAuth.js v5 (beta)** — аутентификация (личный кабинет клиента)
- **Zod** — валидация схем и форм
- **React Hook Form + @hookform/resolvers** — формы
- **clsx + tailwind-merge** — условные классы

## Как запустить

```bash
# Установить зависимости (уже установлены)
npm install

# Dev-сервер на порту 3000
npm run dev

# Dev-сервер на нестандартном порту (используется в проекте)
npm run dev -- -p 6543

# Продакшн сборка
npm run build

# ESLint
npm run lint
```

---

## Что уже сделано

### Конфигурация
- `tailwind.config.ts` — кастомный brand (indigo), hero-gradient, шрифт Inter
- `src/app/globals.css` — тёплый фон #F8F7F4
- `src/app/layout.tsx` — Inter с Cyrillic, глобальные metadata
- `next.config.mjs` — разрешены изображения с picsum.photos и car-rent.ua
- `.claude/launch.json` — конфиг запуска dev-сервера на порту 6543
- `.claudeignore` — исключены node_modules, .next, .env и т.д.
- `docs/pages.md` — описание всех страниц

### Лейауты
- `src/app/(marketing)/layout.tsx` — Header + Footer + WhatsAppButton для всех публичных страниц
- `src/app/account/layout.tsx` — Header + Footer + боковое меню + WhatsAppButton

### Компоненты
- `src/components/layout/Header.tsx` — логотип, навигация, телефон, кнопка; sticky + backdrop-blur
- `src/components/layout/MobileMenu.tsx` — гамбургер меню (client)
- `src/components/layout/Footer.tsx` — тёмный (slate-950), 4 колонки, соцсети, год через getFullYear()
- `src/components/CarCard.tsx` — карточка авто с фото, характеристиками, ценой
- `src/components/WhatsAppButton.tsx` — плавающая кнопка WhatsApp (правый нижний угол, все страницы)
- `src/components/ContactForm.tsx` — форма обратной связи с валидацией (client)
- `src/components/home/SearchForm.tsx` — форма поиска по датам на главной (client)

### Данные
- `src/data/cars.ts` — 12 автомобилей (Эконом/Комфорт/Бизнес/Премиум/SUV), типы, константы
  - Фото с car-rent.ua (разрешение получено для разработки и GitHub)

### Страницы
- `src/app/(marketing)/page.tsx` — **Главная**: Hero с фото `public/images/hero-bg.jpg`, форма поиска, 6 карточек авто, 4 преимущества, CTA-баннер
- `src/app/(marketing)/catalog/page.tsx` — **Каталог**: фильтры (категория, КПП, цена), сортировка, 12 карточек, счётчик
  - `catalog/components/Filters.tsx` — панель фильтров (client)
  - `catalog/components/CatalogClient.tsx` — весь интерактив каталога (client)
- `src/app/(marketing)/car/[slug]/page.tsx` — **Карточка авто**: галерея, характеристики, форма бронирования, похожие авто; `generateStaticParams` для 12 авто
  - `car/[slug]/components/Gallery.tsx` — галерея с миниатюрами (client)
  - `car/[slug]/components/BookingForm.tsx` — форма бронирования с расчётом суммы (client)
- `src/app/(marketing)/contacts/page.tsx` — **Контакты**: адрес, телефон, WhatsApp, Telegram, email, часы; форма обратной связи; Google Maps iframe
- `src/app/(marketing)/booking/page.tsx` — **Бронирование**: заглушка (3 шага)
- `src/app/(marketing)/booking/success/page.tsx` — **Подтверждение**: заглушка
- `src/app/account/page.tsx` — redirect → /account/bookings
- `src/app/account/bookings/page.tsx` — **Мои брони**: заглушка с mock-данными
- `src/app/account/profile/page.tsx` — **Профиль**: заглушка
- `src/app/not-found.tsx` — **404**: "Страница не найдена", кнопка "На главную"

### SEO
- Главная, каталог, контакты — metadata + openGraph
- Страницы авто — `generateMetadata` с title, description, og:image из данных авто

### Публичные файлы
- `public/images/hero-bg.jpg` — фоновое фото для Hero-секции главной

---

## Что осталось сделать

### Страницы (заглушки, нужен реальный контент)
- `/about` — О нас
- `/conditions` — Условия аренды
- `/services` — Другие услуги
- `/business` — Для бизнеса
- `/buyout` — Под выкуп
- `/reviews` — Отзывы
- `/blog` и `/blog/[slug]` — Блог

### Функционал
- **Бронирование** — полный флоу: шаги, данные клиента, подтверждение (сейчас заглушка)
- **Личный кабинет** — авторизация через NextAuth, реальные брони из БД
- **База данных** — настроить PostgreSQL, написать Prisma schema, запустить миграции
- **API routes** — `/api/bookings`, `/api/cars` для работы с БД
- **Форма бронирования** — вместо `alert` отправлять данные в API
- **Форма контактов** — вместо заглушки отправлять в API / email
- **Поиск по датам** — фильтрация каталога с учётом занятости авто

### Улучшения
- Реальные фото авто (заменить фото с car-rent.ua на собственные)
- Реальный номер телефона, адрес, контакты в Header и Footer
- Логотип (сейчас текстовый)
- Мобильная версия — дополнительное тестирование

---

## Правила кода

### Общие
- Все компоненты — `'use client'` только когда нужна интерактивность; по умолчанию Server Components
- Экспорт компонентов — только default export
- Имена компонентов — PascalCase, файлы — PascalCase.tsx
- Нет `any` — всегда типизировать явно

### Tailwind
- Условные классы через шаблонные строки или `clsx`
- Не хардкодить hex — только через tailwind.config.ts (brand.600 и т.д.)
- После создания новых компонентов **перезапускать dev-сервер** (Tailwind JIT не всегда подхватывает новые файлы)

### Цветовая схема
- Акцент: `brand-600` (#4F46E5, indigo)
- Фон страниц: `#F8F7F4`
- Текст: `slate-900` / `slate-500`
- Футер: `slate-950`

### Prisma
- Клиент только через `lib/prisma.ts` (singleton)
- Все DB-запросы — в Server Components или Route Handlers

### API Routes
- Валидация входных данных через Zod
- Формат ответа: `{ data, error, message }`

### Важно
- После каждого изменения файлов компонентов — проверять в браузере
- Если стили не применяются — перезапустить dev-сервер (проблема Tailwind JIT)
- Изображения с car-rent.ua — только для разработки и GitHub, заменить на свои перед продакшном
