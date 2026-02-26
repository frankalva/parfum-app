import { SlidersHorizontal, X } from "lucide-react";
import type { GenderFilter } from "../types";

interface FiltersBarProps {
  brands: string[];
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
  gender: GenderFilter;
  onGenderChange: (gender: GenderFilter) => void;
  priceRange: [number, number];
  currentPriceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  onReset: () => void;
  totalResults: number;
}

const GENDERS: GenderFilter[] = ["Todos", "Hombre", "Mujer", "Unisex"];

export default function FiltersBar({
  brands,
  selectedBrand,
  onBrandChange,
  gender,
  onGenderChange,
  priceRange,
  currentPriceRange,
  onPriceRangeChange,
  onReset,
  totalResults,
}: FiltersBarProps) {
  const hasActiveFilters =
    gender !== "Todos" ||
    selectedBrand !== "" ||
    currentPriceRange[0] !== priceRange[0] ||
    currentPriceRange[1] !== priceRange[1];

  return (
    <div className="bg-white border-b border-zinc-100 sticky top-16 md:top-20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-zinc-400">
            <SlidersHorizontal size={16} />
            <span className="text-xs tracking-[0.15em] uppercase font-medium">
              Filtros
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-400">
              {totalResults} {totalResults === 1 ? "fragancia" : "fragancias"}
            </span>
            {hasActiveFilters && (
              <button
                onClick={onReset}
                className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                <X size={14} />
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Filters row */}
        <div className="flex flex-wrap gap-3 md:gap-4 items-center">
          {/* Gender filter */}
          <div className="flex gap-1 bg-zinc-50 rounded-lg p-1">
            {GENDERS.map((g) => (
              <button
                key={g}
                onClick={() => onGenderChange(g)}
                className={`px-3 py-1.5 text-xs tracking-wider uppercase rounded-md transition-all duration-200 ${
                  gender === g
                    ? "bg-zinc-900 text-white shadow-sm"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Brand filter */}
          <select
            value={selectedBrand}
            onChange={(e) => onBrandChange(e.target.value)}
            className="px-3 py-2 text-xs tracking-wider uppercase bg-zinc-50 border-0 
                       rounded-lg text-zinc-600 outline-none cursor-pointer
                       focus:ring-1 focus:ring-zinc-300 transition-all"
          >
            <option value="">Todas las marcas</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>

          {/* Price range */}
          <div className="flex items-center gap-2 bg-zinc-50 rounded-lg px-3 py-2">
            <span className="text-xs text-zinc-400 tracking-wider uppercase whitespace-nowrap">
              Precio
            </span>
            <input
              type="range"
              min={priceRange[0]}
              max={priceRange[1]}
              value={currentPriceRange[1]}
              onChange={(e) =>
                onPriceRangeChange([priceRange[0], Number(e.target.value)])
              }
              className="w-20 md:w-32 accent-zinc-900 h-1"
            />
            <span className="text-xs font-medium text-zinc-700 min-w-[60px] text-right">
              S/ {currentPriceRange[1]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
