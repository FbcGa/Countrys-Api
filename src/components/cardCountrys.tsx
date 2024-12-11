import { type Countrys } from "../types/types";
import "./CardCountrys.css";

interface Props {
  countrys: Countrys[];
}
export function CardCountrys({ countrys }: Props) {
  return (
    <ul className="card-country">
      {countrys.slice(0, 10).map((country) => (
        <li key={country.cca2}>
          <div>
            <img src={country.flags.svg} />
          </div>

          <div className="card-text">
            <h2>{country.name.common}</h2>
            <p>Population: {country.population.toLocaleString()} </p>
            <p>Region: {country.region} </p>
            <p>Capital: {country.capital} </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
