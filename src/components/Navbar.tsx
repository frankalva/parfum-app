import { useState, useCallback } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import logo from "../assets/esencia_perfume.jpg";
import type { GenderFilter } from "../types";

interface NavbarProps {
  onSearchChange: (value: string) => void;
  onGenderChange: (gender: GenderFilter) => void;
  activeGender: GenderFilter;
  cartCount?: number;
}

const NAV_LINKS: { label: string; gender: GenderFilter }[] = [
  { label: "Inicio", gender: "Todos" },
  { label: "Catálogo", gender: "Todos" },
  { label: "Hombre", gender: "Hombre" },
  { label: "Mujer", gender: "Mujer" },
  { label: "Unisex", gender: "Unisex" },
];

export default function Navbar({
  onSearchChange,
  onGenderChange,
  activeGender,
  cartCount = 0,
}: NavbarProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = useCallback(
    (link: (typeof NAV_LINKS)[number]) => {
      if (link.label === "Catálogo") {
        document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
      } else if (link.label === "Inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        onGenderChange(link.gender);
        document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
      }
      setMobileOpen(false);
    },
    [onGenderChange]
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Logo - Left desktop */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hidden md:flex items-center"
          >
            <img
              src={logo}
              alt="ESSENZA Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-lg hover:opacity-80 transition-opacity"
            />
          </button>

          {/* Nav links - desktop center */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.slice(0, 5).map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-200 ${
                  activeGender === link.gender && link.label !== "Inicio" && link.label !== "Catálogo"
                    ? "text-zinc-900 font-semibold"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Logo - Center */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="md:hidden"
          >
            <img
              src={logo}
              alt="ESSENZA Logo"
              className="h-8 w-8 object-cover rounded-lg hover:opacity-80 transition-opacity"
            />
          </button>

          

          {/* Icons */}
          <div className="flex items-center gap-3">
            {searchOpen ? (
              <div className="flex items-center gap-2">
                <input
                  autoFocus
                  type="text"
                  placeholder="Buscar fragancia..."
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-32 sm:w-48 px-3 py-1.5 text-sm border-b border-zinc-300 
                             bg-transparent outline-none focus:border-zinc-900 transition-colors"
                />
                <button
                  onClick={() => {
                    setSearchOpen(false);
                    onSearchChange("");
                  }}
                  className="p-1 text-zinc-400 hover:text-zinc-900"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors"
                aria-label="Buscar"
              >
                <Search size={18} />
              </button>
            )}
            <button
              className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors relative"
              aria-label="Carrito"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className={`block w-full text-left py-3 text-sm tracking-[0.15em] uppercase border-b border-zinc-50 transition-colors ${
                activeGender === link.gender && link.label !== "Inicio" && link.label !== "Catálogo"
                  ? "text-zinc-900 font-semibold"
                  : "text-zinc-500"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
