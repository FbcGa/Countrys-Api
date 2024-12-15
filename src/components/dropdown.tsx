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
    <div className="w-full max-w-xs">
      <select
        name={filters.selectRegion}
        onChange={toggleRegion}
        className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:cursor-pointer"
      >
        <option value="" className="text-gray-500 italic">
          Filter by region
        </option>
        {Object.entries(region).map(([key, value]) => (
          <option key={key} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
