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
    <div className="max-w-lg my-5 mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden p-5 lg:max-w-screen-lg lg:flex lg:items-center">
      {/* Bandera */}
      <div className="">
        <img
          src={singleCountry?.flags.svg}
          alt={
            singleCountry?.flags.alt ?? `Flag of ${singleCountry?.name.common}`
          }
          className="w-full aspect-auto object-cover max-w-xl"
        />
      </div>

      <section>
        {/* Información principal */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            {singleCountry?.name.common}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span className="font-bold">Native Name:</span>{" "}
            {singleCountry?.name.official ?? "N/A"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span className="font-bold">Population:</span>{" "}
            {singleCountry?.population.toLocaleString() ?? "N/A"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span className="font-bold">Region:</span>{" "}
            {singleCountry?.region ?? "N/A"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span className="font-bold">Sub Region:</span>{" "}
            {singleCountry?.subregion ?? "N/A"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span className="font-bold">Capital:</span>{" "}
            {singleCountry?.capital?.join(", ") ?? "N/A"}
          </p>
        </div>

        {/* Información adicional */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span className="font-bold">Top Level Domain:</span>{" "}
            {singleCountry?.tld?.join(", ") ?? "N/A"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span className="font-bold">Currencies:</span>{" "}
            {singleCountry?.currencies
              ? Object.values(singleCountry.currencies)
                  .map((currency) => currency.name)
                  .join(", ")
              : "N/A"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span className="font-bold">Languages:</span>{" "}
            {singleCountry?.languages
              ? Object.values(singleCountry.languages).join(", ")
              : "N/A"}
          </p>
        </div>
        {/* Países fronterizos */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">
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
      </section>
    </div>
  );
}
