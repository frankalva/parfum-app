import { useMemo, useCallback } from "react";
import type { Perfume, Filters, GenderFilter } from "../types";

export function useFilteredPerfumes(perfumes: Perfume[], filters: Filters) {
  return useMemo(() => {
    return perfumes.filter((p) => {
      if (filters.gender !== "Todos" && p.gender !== filters.gender) return false;
      if (filters.brand && p.brand !== filters.brand) return false;
      if (p.price < filters.priceRange[0] || p.price > filters.priceRange[1]) return false;
      if (
        filters.search &&
        !p.name.toLowerCase().includes(filters.search.toLowerCase()) &&
        !p.brand.toLowerCase().includes(filters.search.toLowerCase())
      )
        return false;
      return true;
    });
  }, [perfumes, filters]);
}

export function useFilterHandlers(
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
) {
  const setGender = useCallback(
    (gender: GenderFilter) => setFilters((f) => ({ ...f, gender })),
    [setFilters]
  );

  const setBrand = useCallback(
    (brand: string) => setFilters((f) => ({ ...f, brand })),
    [setFilters]
  );

  const setPriceRange = useCallback(
    (priceRange: [number, number]) => setFilters((f) => ({ ...f, priceRange })),
    [setFilters]
  );

  const setSearch = useCallback(
    (search: string) => setFilters((f) => ({ ...f, search })),
    [setFilters]
  );

  const resetFilters = useCallback(
    (defaultPriceRange: [number, number]) =>
      setFilters({
        gender: "Todos",
        brand: "",
        priceRange: defaultPriceRange,
        search: "",
      }),
    [setFilters]
  );

  return { setGender, setBrand, setPriceRange, setSearch, resetFilters };
}
