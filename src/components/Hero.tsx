import { ArrowDown } from "lucide-react";
import BrandCarousel from "./BrandCarousel";
import type { Perfume } from "../types";

interface HeroProps {
  perfumes?: Perfume[];
}

export default function Hero({ perfumes = [] }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-50 to-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-gold-400" />
          <span className="text-xs tracking-[0.3em] uppercase text-gold-600 font-medium">
            Colección exclusiva
          </span>
          <div className="w-12 h-px bg-gold-400" />
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-7xl font-semibold text-zinc-900 leading-tight mb-6">
          Descubre tu nueva
          <br />
          <span className="italic text-gold-600">fragancia</span>
        </h2>

        <p className="max-w-lg mx-auto text-zinc-500 text-sm sm:text-base md:text-lg leading-relaxed mb-10">
          Explora nuestra selección curada de perfumes premium.
          <br />
          Encuentra la esencia que define tu estilo.
        </p>

        <button
          onClick={() =>
            document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })
          }
          className="btn-outline group text-sm sm:text-base"
        >
          Explorar catálogo
          <ArrowDown
            size={14}
            className="ml-2 group-hover:translate-y-0.5 transition-transform"
          />
        </button>

        {/* Brand carousel below button */}
        {perfumes.length > 0 && (
          <div className="mt-8 sm:mt-16">
            <BrandCarousel perfumes={perfumes} />
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-6 sm:h-8 bg-zinc-400 animate-pulse" />
      </div>
    </section>
  );
}
