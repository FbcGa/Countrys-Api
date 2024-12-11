import { type Countrys, Region } from "./types/types.d";
import "./App.css";
import { useEffect, useState } from "react";
import { NavBar } from "./components/navBar";
import { CardCountrys } from "./components/cardCountrys";
import { InputSearch } from "./components/inputSearch";
import { Dropdown } from "./components/dropdown";

function App() {
  const [countrys, setCountrys] = useState<Countrys[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((resp) => resp.json())
      .then((data) => setCountrys(data));
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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

  const filteredCountry = filterCountry(countrys, search);

  const regions = Object.values(Region);
  return (
    <>
      <NavBar />
      <InputSearch search={search} handleSearch={handleSearch} />
      <Dropdown region={regions} />
      <main>
        <CardCountrys countrys={filteredCountry} />
      </main>
    </>
  );
}

export default App;
