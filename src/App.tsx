import { useState, useContext } from "react";
import { CardCountrys } from "./components/cardCountrys";
import { InputSearch } from "./components/inputSearch";
import { Dropdown } from "./components/dropdown";
import { Pagination } from "./components/pagination";
import { useCountrys } from "./hooks/useCountrys";
import { usePagination } from "./hooks/usePagination";
import { useFilteredCountrys } from "./hooks/useFilteredCountrys";
import { FiltersContext } from "./context/filter";
import { CardsSkeleton } from "./components/cardsSkeleton";

function App() {
  const { filters, setFilters } = useContext(FiltersContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(0);
  const countrys = useCountrys({ setLoading });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
    setCurrentPage(0);
  };

  const toggleRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, selectRegion: e.target.value });
    setCurrentPage(0);
  };

  const filteredCountrys = useFilteredCountrys({
    countrys,
    search: filters.search,
    selectRegion: filters.selectRegion,
  });

  const { currentItems, pageCount, handlePageClick } = usePagination({
    items: filteredCountrys,
    itemsPerPage: 9,
    currentPage,
    onPageChange: setCurrentPage,
  });

  return (
    <div className="max-w-5xl mx-auto grid min-h-dvh grid-rows-[auto_1fr_auto] px-6 lg:px-0">
      <header className="my-7 flex flex-col space-y-4 items-stretch sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
        <InputSearch handleSearch={handleSearch} />
        <Dropdown toggleRegion={toggleRegion} />
      </header>
      <main>
        {loading ? <CardsSkeleton /> : <CardCountrys countrys={currentItems} />}
      </main>

      <footer className="m-5 flex justify-center">
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
