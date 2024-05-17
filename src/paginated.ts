export interface PaginationOptions {
  page: number | 'first' | 'last';
  pageSize: number;
}

export interface PaginationResult<T> {
  items: T[];
  pagination: {
    totalRecord: number;
    totalPages: number;
    pageSize: number;
    page: number;
  };
}
export const paginate =
  <T>(array: T[]) =>
  ({ page, pageSize }: PaginationOptions = { pageSize: 20, page: 1 }): PaginationResult<T> => {
    const totalPages = Math.ceil(array.length / pageSize);
    if (page === 'first') page = 1;
    if (page === 'last') page = totalPages;
    if (page < 1) throw new Error('Page must be greater than 0');
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    const items = array.slice(start, end);
    return {
      items,
      pagination: {
        totalRecord: array.length,
        totalPages,
        pageSize,
        page
      }
    };
  };
