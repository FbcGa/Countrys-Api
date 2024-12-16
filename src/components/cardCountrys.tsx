import { type Countrys } from "../types/types";
import { useNavigate } from "react-router";

interface Props {
  countrys: Countrys[];
}

export function CardCountrys({ countrys }: Props) {
  const navigate = useNavigate();
  const singlePage = (uuid: string) => {
    navigate(`/${uuid}`);
  };
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-0 m-0 list-none">
      {countrys.map((country) => (
        <li
          key={country.cca2}
          className="flex flex-col bg-gray-100 dark:bg-gray-600 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          onClick={() => singlePage(country.cca2)}
        >
          <div className="relative">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="block w-full aspect-[16/9] h-auto object-cover"
            />
          </div>
          <div className="text-left p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {country.name.common}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
              Population:{" "}
              <span className="font-medium text-gray-800 dark:text-gray-100">
                {country.population.toLocaleString()}
              </span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
              Region:{" "}
              <span className="font-medium text-gray-800 dark:text-gray-100">
                {country.region}
              </span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Capital:{" "}
              <span className="font-medium text-gray-800 dark:text-gray-100">
                {country.capital}
              </span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
