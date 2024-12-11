import { useState } from "react";
import { type Region } from "../types/types.d";

interface Props {
  region: Region[];
}

export function Dropdown({ region }: Props) {
  const [selectRegion, setSelectRegion] = useState<string>("");

  const toggleRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectRegion(e.target.value);
  };
  return (
    <div>
      <select name={selectRegion} onChange={toggleRegion}>
        <option value="">Filter by region</option>
        {Object.entries(region).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
