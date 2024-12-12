import { createContext, ReactNode } from "react";
import { Region } from "../types/types.d";

interface Props {
  children: ReactNode; // Cambia JSX.Element a ReactNode
}

export const FiltersContext = createContext<{
  search: string;
  region: Region[]; // Define el tipo de la propiedad region
}>();

export function FilterProvider({ children }: Props) {
  return (
    <FiltersContext.Provider
      value={{
        search: "",
        region: Object.values(Region),
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
