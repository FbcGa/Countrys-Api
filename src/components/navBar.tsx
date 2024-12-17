import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router";

export function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <nav className="flex justify-between items-center mx-auto p-5 bg-white dark:bg-black">
      <Link
        className="text-xl font-bold text-wrap dark:text-white sm:text-3xl"
        to="/"
      >
        Where in the world?
      </Link>
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-700 shadow transition-all duration-300 hover:shadow-md"
        title="Switch theme"
      >
        <Moon
          className={`w-5 h-5 transition-opacity duration-300 ${
            isDarkMode ? "opacity-100 text-blue-500" : "opacity-0 text-gray-500"
          }`}
        />
        <Sun
          className={`w-5 h-5 transition-opacity duration-300 ${
            isDarkMode
              ? "opacity-0 text-gray-500"
              : "opacity-100 text-yellow-400"
          }`}
        />
      </button>
    </nav>
  );
}
