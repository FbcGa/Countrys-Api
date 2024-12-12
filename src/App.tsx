import { Region, type Countrys } from "./types/types.d";
import "./App.css";
import { useEffect, useState } from "react";
import { NavBar } from "./components/navBar";
import { CardCountrys } from "./components/cardCountrys";
import { InputSearch } from "./components/inputSearch";
import { Dropdown } from "./components/dropdown";

export interface Filters {
  search: string;
  selectRegion: Region | string;
}
function App() {
  const [countrys, setCountrys] = useState<Countrys[]>([]);
  const [filters, setfilters] = useState<Filters>({
    search: "",
    selectRegion: "",
  });
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((resp) => resp.json())
      .then((data) => setCountrys(data));
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfilters({ ...filters, search: e.target.value });
  };

  const toggleRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setfilters({ ...filters, selectRegion: e.target.value });
    console.log(filters.selectRegion);
  };

  const filterCountry = (countrys: Countrys[], search: string): Countrys[] => {
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
    filterCountry(countrys, filters.search),
    filters.selectRegion
  );

  return (
    <>
      <NavBar />
      <InputSearch search={filters.search} handleSearch={handleSearch} />
      <Dropdown
        selectRegion={filters.selectRegion}
        toggleRegion={toggleRegion}
      />
      <main>
        <CardCountrys countrys={filteredCountrys} />
      </main>
    </>
  );
}

export default App;
