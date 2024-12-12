import { type Countrys, Region } from "./types/types.d";
import "./App.css";
import { useEffect, useState } from "react";
import { NavBar } from "./components/navBar";
import { CardCountrys } from "./components/cardCountrys";
import { InputSearch } from "./components/inputSearch";
import { Dropdown } from "./components/dropdown";

export interface Filters {
  search: string;
  region: Region[];
}
function App() {
  const [countrys, setCountrys] = useState<Countrys[]>([]);
  const [filters, setfilters] = useState<Filters>({
    search: "",
    region: Object.values(Region),
  });
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((resp) => resp.json())
      .then((data) => setCountrys(data));
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfilters({ ...filters, search: e.target.value });
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

  const filteredCountry = filterCountry(countrys, filters.search);
  console.log(filters.region);
  return (
    <>
      <NavBar />
      <InputSearch search={filters.search} handleSearch={handleSearch} />
      <Dropdown region={filters.region} />
      <main>
        <CardCountrys countrys={filteredCountry} />
      </main>
    </>
  );
}

export default App;
