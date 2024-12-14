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
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName="flex justify-center space-x-2 my-4"
      pageClassName="px-3 py-1 border rounded cursor-pointer hover:bg-gray-200"
      activeClassName="bg-blue-500 text-white"
      disabledClassName="opacity-50 cursor-not-allowed"
      forcePage={validCurrentPage}
    />
  );
}
