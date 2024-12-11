import { type Countrys } from "./types/types.d";
import "./App.css";
import { useEffect, useState } from "react";
import { NavBar } from "./components/navBar";
import { CardCountrys } from "./components/cardCountrys";
import { Search } from "lucide-react";

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

  const filteredCountry = search
    ? countrys.filter((country) =>
        country.name.common.toLocaleLowerCase().includes(search)
      )
    : countrys;
  return (
    <>
      <NavBar />
      <form>
        <Search />
        <input
          type="text"
          value={search}
          placeholder="Search for a country..."
          onChange={handleSearch}
        />
      </form>
      <main>
        <CardCountrys countrys={filteredCountry} />
      </main>
    </>
  );
}

export default App;
