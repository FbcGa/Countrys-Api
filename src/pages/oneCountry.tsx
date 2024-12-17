import { Suspense } from "react";
import { SingleCountry } from "../components/singleCountry";

export function OneCountry() {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <SingleCountry />;
    </Suspense>
  );
}
