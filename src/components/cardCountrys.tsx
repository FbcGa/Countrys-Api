import { type Countrys } from "../types/types";

interface Props {
  countrys: Countrys[];
}

export function CardCountrys({ countrys }: Props) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-0 m-0 list-none">
      {countrys.slice(0, 10).map((country) => (
        <li key={country.cca2} className="flex flex-col">
          <div>
            <img
              src={country.flags.svg}
              alt={country.name.official}
              className="block w-full aspect-[16/9] h-auto"
            />
          </div>
          <div className="text-left mt-2 gap-1">
            <h2 className="text-lg font-semibold">{country.name.common}</h2>
            <p className="text-sm">
              Population: {country.population.toLocaleString()}
            </p>
            <p className="text-sm">Region: {country.region}</p>
            <p className="text-sm">Capital: {country.capital}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
