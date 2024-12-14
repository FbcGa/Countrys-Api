import { BrowserRouter, Routes, Route } from "react-router";
import { NavBar } from "./components/navBar";
import App from "./App";

export function Layout() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
