import { useEffect, useState } from "react";
import type { Perfume } from "../types";

interface BrandCarouselProps {
  perfumes: Perfume[];
}

export default function BrandCarousel({ perfumes }: BrandCarouselProps) {
  const [brandLogos, setBrandLogos] = useState<{ brand: string; logo: string }[]>([]);

  useEffect(() => {
    // Obtener logos únicos por marca
    const seenBrands = new Set<string>();
    const logos: { brand: string; logo: string }[] = [];

    perfumes.forEach((perfume) => {
      if (!seenBrands.has(perfume.brand)) {
        seenBrands.add(perfume.brand);
        logos.push({
          brand: perfume.brand,
          logo: perfume.brandLogo,
        });
      }
    });

    setBrandLogos(logos);
  }, [perfumes]);

  // Duplicar para efecto infinito
  const duplicated = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <div className="w-full overflow-hidden py-8">
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .brand-scroll {
          animation: scroll-left 10s linear infinite;
        }
        
        .brand-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex gap-8 justify-start brand-scroll">
        {duplicated.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <img
              src={item.logo}
              alt={item.brand}
              className="h-20 object-contain"
              onError={(e) => {
                // Fallback si la imagen no carga
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        ))}
      </div>

      {/* Gradientes para efecto fade */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white to-transparent pointer-events-none" />
    </div>
  );
}
