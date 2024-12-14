import { useContext } from "react";
import { FiltersContext } from "../context/filter";
import { Search } from "lucide-react";
import "./InputSearch.css";
interface Props {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function InputSearch({ handleSearch }: Props) {
  const { filters } = useContext(FiltersContext);
  return (
    <form>
      <Search />
      <input
        type="text"
        value={filters.search}
        placeholder="Search for a country..."
        onChange={handleSearch}
      />
    </form>
  );
}
