import { Link } from "react-router";
import SingleCountry from "../components/singleCountry";
import { ArrowLeft } from "lucide-react";

function OneCountry() {
  return (
    <>
      <div className="m-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition-all duration-300"
        >
          <ArrowLeft size={18} />
          Back
        </Link>
      </div>
      <SingleCountry />
    </>
  );
}

export default OneCountry;
