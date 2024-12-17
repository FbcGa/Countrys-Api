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
    <div className="grid gap-10 m-4 p-2 bg-white dark:bg-gray-700 items-center lg:flex">
      {/* Bandera */}
      <section className="max-w-screen-sm">
        <img
          src={singleCountry?.flags.svg}
          alt={
            singleCountry?.flags.alt ?? `Flag of ${singleCountry?.name.common}`
          }
          className="object-cover aspect-video rounded-lg"
        />
      </section>

      <section>
        <div className="lg:grid lg:gap-3">
          {/* Información principal */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 lg:text-4xl">
              {singleCountry?.name.common}
            </h1>
          </div>

          {/* Información adicional */}
          <div className="gap-3 mt-3 lg:grid lg:grid-cols-2">
            <div className="lg:grid lg:gap-1 lg:text-wrap">
              <p className="text-base text-gray-600 dark:text-gray-300">
                <span className="font-bold">Native Name:</span>{" "}
                {singleCountry?.name.official ?? "N/A"}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                <span className="font-bold">Population:</span>{" "}
                {singleCountry?.population.toLocaleString() ?? "N/A"}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                <span className="font-bold">Region:</span>{" "}
                {singleCountry?.region ?? "N/A"}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                <span className="font-bold">Sub Region:</span>{" "}
                {singleCountry?.subregion ?? "N/A"}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                <span className="font-bold">Capital:</span>{" "}
                {singleCountry?.capital?.join(", ") ?? "N/A"}
              </p>
            </div>

            <div className="lg:text-wrap">
              <p className="text-base text-gray-600 dark:text-gray-300">
                <span className="font-bold">Top Level Domain:</span>{" "}
                {singleCountry?.tld?.join(", ") ?? "N/A"}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                <span className="font-bold">Currencies:</span>{" "}
                {singleCountry?.currencies
                  ? Object.values(singleCountry.currencies)
                      .map((currency) => currency.name)
                      .join(", ")
                  : "N/A"}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                <span className="font-bold">Languages:</span>{" "}
                {singleCountry?.languages
                  ? Object.values(singleCountry.languages).join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Países fronterizos */}
        <div className="mt-3 dark:border-gray-700 lg:grid lg:grid-cols-2">
          <h6 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Border Countries
          </h6>
          <div className="flex flex-wrap gap-2">
            {singleCountry?.borders ? (
              singleCountry.borders.map((border, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full"
                >
                  {border}
                </span>
              ))
            ) : (
              <span className="text-base text-gray-600 dark:text-gray-300">
                N/A
              </span>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
