import type { Perfume } from "../types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  perfumes: Perfume[];
  onSelectPerfume: (perfume: Perfume) => void;
}

export default function ProductGrid({ perfumes, onSelectPerfume }: ProductGridProps) {
  if (perfumes.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="text-zinc-400 text-lg mb-2">No se encontraron fragancias</p>
        <p className="text-zinc-300 text-sm">
          Intenta ajustar los filtros de búsqueda
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {perfumes.map((perfume) => (
        <ProductCard
          key={perfume.id}
          perfume={perfume}
          onSelect={onSelectPerfume}
        />
      ))}
    </div>
  );
}
