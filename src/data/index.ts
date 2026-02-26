import type { PerfumesData, Perfume } from "../types";
import rawData from "./perfumes_data.json";

// Limpiar datos: eliminar acordes duplicados consecutivos
function cleanPerfumeData(data: PerfumesData): PerfumesData {
  return {
    ...data,
    perfumes: data.perfumes.map((perfume) => ({
      ...perfume,
      accords: perfume.accords.filter(
        (accord, i, arr) =>
          i === 0 || accord.name !== arr[i - 1].name
      ),
    })),
  };
}

const data = cleanPerfumeData(rawData as PerfumesData);

export const perfumes: Perfume[] = data.perfumes;

export const brands: string[] = [
  ...new Set(data.perfumes.map((p) => p.brand)),
].sort();

export const priceRange: [number, number] = [
  Math.min(...data.perfumes.map((p) => p.price)),
  Math.max(...data.perfumes.map((p) => p.price)),
];

export function formatPrice(price: number, currency: string = "PEN"): string {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
