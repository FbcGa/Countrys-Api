import { BrowserRouter, Routes, Route } from "react-router";
import { NavBar } from "./components/navBar";
import App from "./App";
import { OneCountry } from "./pages/oneCountry";

export function Layout() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:uuid" element={<OneCountry />} />
      </Routes>
    </BrowserRouter>
  );
}
