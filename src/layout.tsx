import { BrowserRouter, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import { NavBar } from "./components/navBar";
import { CardsSkeleton } from "./components/skeletons";
const App = lazy(() => import("./App"));
const OneCountry = lazy(() => import("./pages/oneCountry"));

export function Layout() {
  return (
    <BrowserRouter>
      <NavBar />
      <Suspense fallback={<CardsSkeleton />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:uuid" element={<OneCountry />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
