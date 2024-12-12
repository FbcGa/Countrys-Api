import { Region } from "../types/types.d";

interface Props {
  selectRegion: Region | string;
  toggleRegion: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export function Dropdown({ selectRegion, toggleRegion }: Props) {
  const region = Object.values(Region);

  return (
    <div>
      <select name={selectRegion} onChange={toggleRegion}>
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
