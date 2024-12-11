import { type Countrys } from "./types/types.d";
import "./App.css";
import { useEffect, useState } from "react";
import { NavBar } from "./components/navBar";
import { CardCountrys } from "./components/cardCountrys";

function App() {
  const [countrys, setCountrys] = useState<Countrys[]>([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((resp) => resp.json())
      .then((data) => setCountrys(data));
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <CardCountrys countrys={countrys} />
      </main>
    </>
  );
}

export default App;
