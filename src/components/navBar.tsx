import { useState } from "react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

export function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <nav className="flex justify-between items-center mx-auto p-5 bg-white dark:bg-black">
      <h1 className="text-3xl font-bold dark:text-white">
        Where in the world?
      </h1>
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-700 shadow transition-all duration-300 hover:shadow-md"
        title="Switch theme"
      >
        <Moon
          className={`w-5 h-5 transition-opacity duration-300 ${
            isDarkMode
              ? "opacity-100 text-yellow-400"
              : "opacity-50 text-gray-500"
          }`}
        />
        <Sun
          className={`w-5 h-5 transition-opacity duration-300 ${
            isDarkMode
              ? "opacity-50 text-gray-500"
              : "opacity-100 text-yellow-400"
          }`}
        />
      </button>
    </nav>
  );
}
