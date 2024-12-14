import { createContext, ReactNode, useState } from "react";
import { Region } from "../types/types.d";

interface Props {
  children: ReactNode;
}

interface Filters {
  search: string;
  selectRegion: Region | string;
}

export const FiltersContext = createContext<{
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}>({
  filters: { search: "", selectRegion: "" },
  setFilters: () => {},
});

export function FiltersProvider({ children }: Props) {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    selectRegion: "",
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
