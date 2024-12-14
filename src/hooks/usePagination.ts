interface PaginationHookProps<T> {
  items: T[];
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function usePagination<T>({
  items,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationHookProps<T>) {
  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    onPageChange(selected);
  };

  return { currentItems, pageCount, handlePageClick };
}
