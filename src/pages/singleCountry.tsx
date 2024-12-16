import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { type Countrys } from "../types/types.d";

export function SingleCountry() {
  const [singleCountry, setSingleCountry] = useState<Countrys | null>(null);
  const { uuid } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha?codes=${uuid}`)
      .then((res) => res.json())
      .then((data) => setSingleCountry(data[0]));
  }, [uuid]);

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {/* Bandera */}
      <div className="relative">
        <img
          src={singleCountry?.flags.svg}
          alt={
            singleCountry?.flags.alt || `Flag of ${singleCountry?.name.common}`
          }
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Información principal */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          {singleCountry?.name.common}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          <span className="font-semibold">Native Name:</span>{" "}
          {singleCountry?.name.official || "N/A"}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          <span className="font-semibold">Population:</span>{" "}
          {singleCountry?.population.toLocaleString() || "N/A"}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          <span className="font-semibold">Region:</span>{" "}
          {singleCountry?.region || "N/A"}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          <span className="font-semibold">Sub Region:</span>{" "}
          {singleCountry?.subregion || "N/A"}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          <span className="font-semibold">Capital:</span>{" "}
          {singleCountry?.capital?.join(", ") || "N/A"}
        </p>
      </div>

      {/* Información adicional */}
      <div className="p-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          <span className="font-semibold">Top Level Domain:</span>{" "}
          {singleCountry?.tld?.join(", ") || "N/A"}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          <span className="font-semibold">Currencies:</span>{" "}
          {singleCountry?.currencies
            ? Object.values(singleCountry.currencies)
                .map((currency) => currency.name)
                .join(", ")
            : "N/A"}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          <span className="font-semibold">Languages:</span>{" "}
          {singleCountry?.languages
            ? Object.values(singleCountry.languages).join(", ")
            : "N/A"}
        </p>
      </div>

      {/* Países fronterizos */}
      <div className="p-6 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Border Countries
        </h2>
        <div className="flex flex-wrap gap-2">
          {singleCountry?.borders ? (
            singleCountry.borders.map((border, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full"
              >
                {border}
              </span>
            ))
          ) : (
            <span className="text-sm text-gray-600 dark:text-gray-300">
              N/A
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
