import { useState } from "react";
import { Hero, FiltersBar, ProductGrid, ProductDetail, Footer, Navbar } from "./components";
import { perfumes, brands, priceRange } from "./data";
import { useFilteredPerfumes, useFilterHandlers } from "./hooks/useFilters";
import type { Perfume, Filters } from "./types";

const INITIAL_FILTERS: Filters = {
  gender: "Todos",
  brand: "",
  priceRange: priceRange,
  search: "",
};

function App() {
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS);
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);

  const filtered = useFilteredPerfumes(perfumes, filters);
  const { setGender, setBrand, setPriceRange, setSearch, resetFilters } =
    useFilterHandlers(setFilters);

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onSearchChange={setSearch}
        onGenderChange={setGender}
        activeGender={filters.gender}
      />

      <Hero perfumes={perfumes} />

      <section id="catalogo">
        <FiltersBar
          brands={brands}
          selectedBrand={filters.brand}
          onBrandChange={setBrand}
          gender={filters.gender}
          onGenderChange={setGender}
          priceRange={priceRange}
          currentPriceRange={filters.priceRange}
          onPriceRangeChange={setPriceRange}
          onReset={() => resetFilters(priceRange)}
          totalResults={filtered.length}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <ProductGrid
            perfumes={filtered}
            onSelectPerfume={setSelectedPerfume}
          />
        </div>
      </section>

      <Footer />

      {selectedPerfume && (
        <ProductDetail
          perfume={selectedPerfume}
          onClose={() => setSelectedPerfume(null)}
        />
      )}
    </div>
  );
}

export default App;
