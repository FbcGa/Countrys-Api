import { Region } from "../types/types.d";
import { useContext } from "react";
import { FiltersContext } from "../context/filter";
interface Props {
  toggleRegion: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export function Dropdown({ toggleRegion }: Props) {
  const region = Object.values(Region);
  const { filters } = useContext(FiltersContext);
  return (
    <div>
      <select name={filters.selectRegion} onChange={toggleRegion}>
        <option value="">Filter by region</option>
        {Object.entries(region).map(([key, value]) => (
          <option key={key} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
