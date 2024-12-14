import { Region, type Countrys } from "./types/types.d";
import "./App.css";
import { useContext } from "react";
import { CardCountrys } from "./components/cardCountrys";
import { InputSearch } from "./components/inputSearch";
import { Dropdown } from "./components/dropdown";
import { FiltersContext } from "./context/filter";
import { useCountrys } from "./hooks/useCountrys";

export interface Filters {
  search: string;
  selectRegion: Region | string;
}
function App() {
  const countrys = useCountrys();
  const { filters, setFilters } = useContext(FiltersContext);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const toggleRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, selectRegion: e.target.value });
    console.log(filters.selectRegion);
  };

  const filterByCountry = (
    countrys: Countrys[],
    search: string
  ): Countrys[] => {
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
    selectRegion: Region | string
  ): Countrys[] => {
    return selectRegion
      ? countrys.filter((country) => country.region === selectRegion)
      : countrys;
  };

  const filteredCountrys = filterByRegion(
    filterByCountry(countrys, filters.search),
    filters.selectRegion
  );

  return (
    <>
      <div className="m-5 flex justify-between items-center">
        <InputSearch handleSearch={handleSearch} />
        <Dropdown toggleRegion={toggleRegion} />
      </div>

      <main>
        <CardCountrys countrys={filteredCountrys} />
      </main>
    </>
  );
}

export default App;
