import { useContext } from "react";
import { FiltersContext } from "../context/filter";
import { Search } from "lucide-react";

interface Props {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputSearch({ handleSearch }: Props) {
  const { filters } = useContext(FiltersContext);
  return (
    <form className="flex items-center w-full max-w-full sm:max-w-md p-2 bg-white border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500 dark:bg-gray-700 dark:border-gray-600">
      <Search className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-300" />
      <input
        type="text"
        value={filters.search}
        placeholder="Search for a country..."
        onChange={handleSearch}
        className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 dark:text-white dark:placeholder-gray-400"
      />
    </form>
  );
}
