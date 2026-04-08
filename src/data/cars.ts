export type Category = "Эконом" | "Комфорт" | "Бизнес" | "Премиум" | "SUV";
export type Transmission = "Автомат" | "Механика";
export type Fuel = "Бензин" | "Дизель" | "Гибрид";

export interface Car {
  id: string;
  slug: string;
  name: string;
  category: Category;
  transmission: Transmission;
  seats: number;
  fuel: Fuel;
  pricePerDay: number;
  imageUrl: string;
}

export const CARS: Car[] = [
  {
    id: "1",
    slug: "hyundai-accent",
    name: "Hyundai Accent",
    category: "Эконом",
    transmission: "Автомат",
    seats: 5,
    fuel: "Бензин",
    pricePerDay: 89,
    imageUrl: "https://car-rent.ua/wp-content/uploads/2024/09/hyundai-accent-e1773673683823.png",
  },
  {
    id: "2",
    slug: "ford-fiesta",
    name: "Ford Fiesta",
    category: "Эконом",
    transmission: "Механика",
    seats: 5,
    fuel: "Бензин",
    pricePerDay: 99,
    imageUrl: "https://car-rent.ua/wp-content/uploads/2021/01/ford-fiesta-e1773673106817.png",
  },
  {
    id: "3",
    slug: "volkswagen-passat",
    name: "Volkswagen Passat SE",
    category: "Комфорт",
    transmission: "Автомат",
    seats: 5,
    fuel: "Бензин",
    pricePerDay: 139,
    imageUrl: "https://car-rent.ua/wp-content/uploads/2022/09/volkswagen_passat_se_2015_-e1773674097661.png",
  },
  {
    id: "4",
    slug: "mazda-6",
    name: "Mazda 6",
    category: "Комфорт",
    transmission: "Автомат",
    seats: 5,
    fuel: "Бензин",
    pricePerDay: 159,
    imageUrl: "https://car-rent.ua/wp-content/uploads/2023/03/mazda-6-2.png",
  },
  {
    id: "5",
    slug: "kia-optima",
    name: "Kia Optima",
    category: "Комфорт",
    transmission: "Автомат",
    seats: 5,
    fuel: "Бензин",
    pricePerDay: 169,
    imageUrl: "https://car-rent.ua/wp-content/uploads/2025/11/2019-kia-optima-front_13017_032-1.png",
  },
  {
    id: "6",
    slug: "toyota-camry-55",
    name: "Toyota Camry 55",
    category: "Бизнес",
    transmission: "Автомат",
    seats: 5,
    fuel: "Бензин",
    pricePerDay: 219,
    imageUrl: "https://car-rent.ua/wp-content/uploads/2024/01/toyota-camry-55.png",
  },
  {
    id: "7",
    slug: "toyota-camry-hybrid",
    name: "Toyota Camry Hybrid",
    category: "Бизнес",
    transmission: "Автомат",
    seats: 5,
    fuel: "Гибрид",
    pricePerDay: 249,
    imageUrl: "https://car-rent.ua/wp-content/uploads/2025/09/toyota-camty-hybrid-2020-e1773678718625.png",
  },
  {
    id: "8",
    slug: "bmw-5-g30",
    name: "BMW 5 G30",
    category: "Бизнес",
    transmission: "Автомат",
    seats: 5,
    fuel: "Бензин",
    pricePerDay: 269,
    imageUrl: "https://car-rent.ua/wp-content/uploads/2025/12/15242_st0640_116.png",
  },
  {
    id: "9",
    slug: "porsche-panamera",
    name: "Porsche Panamera",
    category: "Премиум",
    transmission: "Автомат",
    seats: 4,
    fuel: "Бензин",
    pricePerDay: 389,
    imageUrl: "https://car-rent.ua/wp-content/uploads/2025/08/e3996cbc32b254dd28205dd7e36a6a11.jpg",
  },
  {
    id: "10",
    slug: "bmw-7",
    name: "BMW 7 Series",
    category: "Премиум",
    transmission: "Автомат",
    seats: 5,
    fuel: "Бензин",
    pricePerDay: 429,
    imageUrl: "https://car-rent.ua/wp-content/uploads/2026/01/bez-nazvaniya.png",
  },
  {
    id: "11",
    slug: "toyota-rav4",
    name: "Toyota RAV4",
    category: "SUV",
    transmission: "Автомат",
    seats: 5,
    fuel: "Гибрид",
    pricePerDay: 179,
    imageUrl: "https://car-rent.ua/wp-content/uploads/2022/07/rav4-1-1-1.jpg",
  },
  {
    id: "12",
    slug: "bmw-x5",
    name: "BMW X5 F15",
    category: "SUV",
    transmission: "Автомат",
    seats: 5,
    fuel: "Дизель",
    pricePerDay: 299,
    imageUrl: "https://car-rent.ua/wp-content/uploads/2024/06/bmw_x5_2018-_compressed.png",
  },
];

export const PRICE_MIN = 89;
export const PRICE_MAX = 500;
export const CATEGORIES: Array<"Все" | Category> = [
  "Все", "Эконом", "Комфорт", "Бизнес", "Премиум", "SUV",
];
export const TRANSMISSIONS: Array<"Все" | Transmission> = [
  "Все", "Автомат", "Механика",
];
