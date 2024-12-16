import { BrowserRouter, Routes, Route } from "react-router";
import { NavBar } from "./components/navBar";
import App from "./App";
import { SingleCountry } from "./pages/singleCountry";

export function Layout() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:uuid" element={<SingleCountry />} />
      </Routes>
    </BrowserRouter>
  );
}
