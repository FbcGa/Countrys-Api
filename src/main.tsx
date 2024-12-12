import { FilterProvider } from "./context/filter.tsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Layout } from "./layout.tsx";

createRoot(document.getElementById("root")!).render(
  <FilterProvider>
    <Layout />
  </FilterProvider>
);
