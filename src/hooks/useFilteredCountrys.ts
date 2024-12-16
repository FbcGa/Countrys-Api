import { Countrys } from "../types/types";

export function useFilteredCountrys ({
  countrys,
  search,
  selectRegion,
}: {
  countrys: Countrys[];
  search: string;
  selectRegion: string;
}): Countrys[] {
  const filterByCountry = (countrys: Countrys[], search: string): Countrys[] => {
    return search
      ? countrys.filter((country) =>
          country.name.common
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
        )
      : countrys;
  };

  const filterByRegion = (
    countrys: Countrys[],
    selectRegion: string
  ): Countrys[] => {
    return selectRegion
      ? countrys.filter((country) => country.region === selectRegion)
      : countrys;
  };

  return filterByRegion(filterByCountry(countrys, search), selectRegion);
};
