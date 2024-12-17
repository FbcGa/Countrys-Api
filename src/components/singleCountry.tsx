import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { type Countrys } from "../types/types";

export function SingleCountry() {
  const [singleCountry, setSingleCountry] = useState<Countrys | null>(null);
  const { uuid } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha?codes=${uuid}`)
      .then((res) => res.json())
      .then((data) => setSingleCountry(data[0]));
  }, [uuid]);

  return (
    <div className="grid lg:grid-cols-2 gap-10 m-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Bandera */}
      <section className="flex justify-center">
        <img
          src={singleCountry?.flags.svg}
          alt={
            singleCountry?.flags.alt ?? `Flag of ${singleCountry?.name.common}`
          }
          className="object-cover aspect-video rounded-lg shadow-md max-h-72 lg:max-h-96"
        />
      </section>

      {/* Información */}
      <section className="flex flex-col justify-between lg:justify-center">
        {/* Título principal */}
        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-6">
          {singleCountry?.name.common}
        </h1>

        {/* Información general */}
        <div className="grid gap-4 sm:grid-cols-2 text-gray-700 dark:text-gray-300">
          <p>
            <span className="font-semibold">Native Name:</span>{" "}
            {singleCountry?.name.official ?? "N/A"}
          </p>
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {singleCountry?.population.toLocaleString() ?? "N/A"}
          </p>
          <p>
            <span className="font-semibold">Region:</span>{" "}
            {singleCountry?.region ?? "N/A"}
          </p>
          <p>
            <span className="font-semibold">Sub Region:</span>{" "}
            {singleCountry?.subregion ?? "N/A"}
          </p>
          <p>
            <span className="font-semibold">Capital:</span>{" "}
            {singleCountry?.capital?.join(", ") ?? "N/A"}
          </p>
          <p>
            <span className="font-semibold">Top Level Domain:</span>{" "}
            {singleCountry?.tld?.join(", ") ?? "N/A"}
          </p>
          <p>
            <span className="font-semibold">Currencies:</span>{" "}
            {singleCountry?.currencies
              ? Object.values(singleCountry.currencies)
                  .map((currency) => currency.name)
                  .join(", ")
              : "N/A"}
          </p>
          <p>
            <span className="font-semibold">Languages:</span>{" "}
            {singleCountry?.languages
              ? Object.values(singleCountry.languages).join(", ")
              : "N/A"}
          </p>
        </div>

        {/* Países fronterizos */}
        <div className="grid mt-6 lg:grid-cols-2 lg:items-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Border Countries:
          </h2>
          <div className="flex flex-wrap gap-2">
            {singleCountry?.borders ? (
              singleCountry.borders.map((border, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md shadow-sm"
                >
                  {border}
                </span>
              ))
            ) : (
              <span className="text-gray-600 dark:text-gray-400">N/A</span>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
