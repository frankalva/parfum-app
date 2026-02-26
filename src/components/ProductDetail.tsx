import { useEffect, useCallback } from "react";
import { X, MessageCircle, ShoppingBag, ShoppingCart } from "lucide-react";
import type { Perfume } from "../types";
import { formatPrice } from "../data";

interface ProductDetailProps {
  perfume: Perfume;
  onClose: () => void;
}

export default function ProductDetail({ perfume, onClose }: ProductDetailProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white w-full max-w-3xl max-h-[85vh] overflow-y-auto 
                   mx-4 shadow-2xl animate-in"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "fadeInUp 0.3s ease-out" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm 
                     text-zinc-500 hover:text-zinc-900 transition-colors rounded-full"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="bg-zinc-40 p-3 sm:p-4 md:p-8 flex items-center justify-center min-h-[180px] sm:min-h-[250px] md:min-h-full">
            <img
              src={perfume.image}
              alt={perfume.name}
              className="max-h-[150px] sm:max-h-[250px] md:max-h-[350px] object-contain"
            />
          </div>

          {/* Details */}
          <div className="p-3 sm:p-4 md:p-6 flex flex-col">
            {/* Brand */}
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              {perfume.brandLogo && (
                <img
                  src={perfume.brandLogo}
                  alt={perfume.brand}
                  className="h-4 sm:h-5 object-contain"
                />
              )}
              <span className="text-xs tracking-[0.2em] uppercase text-zinc-400 font-medium">
                {perfume.brand}
              </span>
            </div>

            {/* Name */}
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-zinc-900 mb-1">
              {perfume.name}
            </h2>

            {/* Gender */}
            <span className="inline-block text-[9px] tracking-[0.15em] uppercase text-zinc-500 bg-zinc-100 px-2 py-0.5 w-fit mb-3">
              {perfume.gender}
            </span>

            {/* Price */}
            <div className="mb-3 sm:mb-4">
              <p className="text-xl sm:text-2xl font-semibold text-zinc-900">
                {formatPrice(perfume.price, perfume.currency)}
              </p>
              <p className="text-[10px] text-zinc-400 mt-0.5">Precio referencial</p>
            </div>

            {/* Accords */}
            <div className="mb-3 sm:mb-4 flex-1">
              <h3 className="text-xs tracking-[0.2em] uppercase text-zinc-400 font-semibold mb-2">
                Acordes principales
              </h3>
              <div className="space-y-1">
                {perfume.accords.map((accord, i) => (
                  <div key={`${accord.name}-${i}`} className="flex items-center gap-2">
                    <div
                      className="h-5 rounded-r-md flex items-center px-2 min-w-[50px] transition-all"
                      style={{
                        backgroundColor: accord.background,
                        color: accord.textColor,
                        width: accord.width,
                        opacity: Math.min(accord.opacity / 100, 1),
                      }}
                    >
                      <span className="text-[10px] font-medium truncate">
                        {accord.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-auto pt-2">
              <button
                onClick={() => {
                  const message = `Hola, me interesa el perfume ${perfume.name} de ${perfume.brand} - ${formatPrice(perfume.price, perfume.currency)}`;
                  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-3 text-sm rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingCart size={16} />
                Click para comprar
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
