import { Search } from "lucide-react";
import "./InputSearch.css";
interface Props {
  search?: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function InputSearch({ search, handleSearch }: Props) {
  return (
    <form>
      <Search />
      <input
        type="text"
        value={search}
        placeholder="Search for a country..."
        onChange={handleSearch}
      />
    </form>
  );
}
