import { memo } from "react";
import type { Perfume } from "../types";
import { formatPrice } from "../data";

interface ProductCardProps {
  perfume: Perfume;
  onSelect: (perfume: Perfume) => void;
}

function ProductCard({ perfume, onSelect }: ProductCardProps) {
  return (
    <article
      className="group cursor-pointer"
      onClick={() => onSelect(perfume)}
    >
      {/* Image container */}
      <div className="relative bg-zinc-50 rounded-sm overflow-hidden aspect-[3/4] mb-4">
        <img
          src={perfume.image}
          alt={perfume.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain p-6
                     transition-transform duration-500 ease-out
                     group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 bg-black/0 group-hover:bg-black/5 
                      transition-colors duration-300 flex items-end justify-center pb-6"
        >
          <span
            className="btn-primary text-[10px] py-2 px-5 opacity-0 translate-y-3
                       group-hover:opacity-100 group-hover:translate-y-0
                       transition-all duration-300"
          >
            Ver detalle
          </span>
        </div>

        {/* Gender badge */}
        <span
          className="absolute top-3 left-3 text-[10px] tracking-[0.15em] uppercase 
                     bg-white/90 backdrop-blur-sm text-zinc-600 px-2.5 py-1 font-medium"
        >
          {perfume.gender}
        </span>
      </div>

      {/* Info */}
      <div className="space-y-1">
        <p className="text-[11px] tracking-[0.15em] uppercase text-zinc-400 font-medium">
          {perfume.brand}
        </p>
        <h3 className="text-sm font-medium text-zinc-900 leading-snug group-hover:text-gold-700 transition-colors">
          {perfume.name}
        </h3>
        <p className="text-sm font-semibold text-zinc-900 pt-1">
          {formatPrice(perfume.price, perfume.currency)}
        </p>
      </div>
    </article>
  );
}

export default memo(ProductCard);
