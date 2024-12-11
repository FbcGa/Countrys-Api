import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";

export function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
