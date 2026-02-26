export interface Accord {
  name: string;
  background: string;
  textColor: string;
  width: string;
  opacity: number;
}

export interface Perfume {
  id: number;
  index: number;
  name: string;
  brand: string;
  brandLogo: string;
  price: number;
  currency: string;
  gender: string;
  image: string;
  url: string;
  accords: Accord[];
}

export interface PerfumesData {
  totalPerfumes: number;
  perfumes: Perfume[];
}

export type GenderFilter = "Todos" | "Hombre" | "Mujer" | "Unisex";

export interface Filters {
  gender: GenderFilter;
  brand: string;
  priceRange: [number, number];
  search: string;
}
