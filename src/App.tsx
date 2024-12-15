import { useState, useContext } from "react";
import { CardCountrys } from "./components/cardCountrys";
import { InputSearch } from "./components/inputSearch";
import { Dropdown } from "./components/dropdown";
import { Pagination } from "./components/pagination";
import { useCountrys } from "./hooks/useCountrys";
import { usePagination } from "./hooks/usePagination";
import { FiltersContext } from "./context/filter";
import { Countrys } from "./types/types";

function App() {
  const countrys = useCountrys();
  const { filters, setFilters } = useContext(FiltersContext);
  const [currentPage, setCurrentPage] = useState(0);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
    setCurrentPage(0);
  };

  const toggleRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, selectRegion: e.target.value });
    setCurrentPage(0);
  };

  const filterByCountry = (
    countrys: Countrys[],
    search: string
  ): Countrys[] => {
    return search
      ? countrys.filter((country) =>
          country.name.common
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
        )
      : countrys;
  };

  const filterByRegion = (
    countrys: Countrys[],
    selectRegion: string
  ): Countrys[] => {
    return selectRegion
      ? countrys.filter((country) => country.region === selectRegion)
      : countrys;
  };

  const filteredCountrys = filterByRegion(
    filterByCountry(countrys, filters.search),
    filters.selectRegion
  );

  const { currentItems, pageCount, handlePageClick } = usePagination({
    items: filteredCountrys,
    itemsPerPage: 12,
    currentPage,
    onPageChange: setCurrentPage,
  });

  return (
    <div className="max-w-5xl mx-auto grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <header className="my-7 flex justify-between items-center">
        <InputSearch handleSearch={handleSearch} />
        <Dropdown toggleRegion={toggleRegion} />
      </header>
      <main>
        <CardCountrys countrys={currentItems} />
      </main>
      <footer className="m-5">
        <Pagination
          pageCount={pageCount}
          onPageChange={handlePageClick}
          currentPage={currentPage}
        />
      </footer>
    </div>
  );
}

export default App;
