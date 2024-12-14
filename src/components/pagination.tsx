import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageCount: number;
  onPageChange: ({ selected }: { selected: number }) => void;
}

export function Pagination({ pageCount, onPageChange }: PaginationProps) {
  return (
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={onPageChange}
      containerClassName="flex justify-center mt-5 space-x-2"
      pageClassName="cursor-pointer bg-gray-200 text-gray-800 rounded-md px-3 py-1 hover:bg-gray-300"
      pageLinkClassName="block"
      previousClassName="cursor-pointer bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-600"
      nextClassName="cursor-pointer bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-600"
      breakClassName="cursor-pointer bg-gray-200 text-gray-800 rounded-md px-3 py-1"
      activeClassName="bg-blue-500 text-white"
    />
  );
}
