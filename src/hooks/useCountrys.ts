import { useState, useEffect } from "react";
import { type Countrys } from "../types/types";

export function useCountrys() {
  const [countrys, setCountrys] = useState<Countrys[]>([]);

  useEffect(() => {

    fetch("https://restcountries.com/v3.1/all")
      .then((resp) => resp.json())
      .then((data) => {
        setCountrys(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error); 
      });
  }, []);

  return countrys;
}
