import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  currentPage: number;
}

export function Pagination({
  pageCount,
  onPageChange,
  currentPage,
}: PaginationProps) {
  const validCurrentPage = currentPage >= pageCount ? 0 : currentPage;

  return (
    <ReactPaginate
      previousLabel={
        <span className="text-gray-700 dark:text-gray-300">Previous</span>
      }
      nextLabel={<span className="text-gray-700 dark:text-gray-300">Next</span>}
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName="flex justify-center space-x-2 my-4 items-center"
      pageClassName="px-3 py-1 border rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
      activeClassName="bg-blue-500 text-white dark:bg-blue-600"
      disabledClassName="opacity-50 cursor-not-allowed"
      forcePage={validCurrentPage}
    />
  );
}
