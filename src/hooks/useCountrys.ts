import { useState, useEffect } from "react";
import { type Countrys } from "../types/types";

interface Props {
  setLoading: (loading: boolean) => void;
}

export function useCountrys({ setLoading }: Props) {
  const [countrys, setCountrys] = useState<Countrys[]>([]);

  useEffect(() => {

    fetch("https://restcountries.com/v3.1/all")
      .then((resp) => resp.json())
      .then((data) => {
        setCountrys(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching countries:", error); 
      });
  }, []);

  return countrys;
}
