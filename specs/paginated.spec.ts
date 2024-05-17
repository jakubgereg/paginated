import { PaginationOptions, paginate } from '../src/paginated';

const paginatedArray = paginate(Array.from({ length: 100 }, (_, i) => ({ id: i + 1 })));

describe('paginatedArray', () => {
  it('should return a paginated information with defaults', () => {
    const { pagination, items } = paginatedArray();
    expect(items).toHaveLength(20);
    expect(pagination.totalRecord).toBe(100);
    expect(pagination.totalPages).toBe(5);
    expect(pagination.page).toBe(1);
    expect(pagination.pageSize).toBe(20);
  });

  it('should throw and error when page is less than 1', () => {
    const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

    const paginatedResult = paginate(data)({ page: 2, pageSize: 5 });

    console.log(paginatedResult);

    expect(() => paginatedArray({ page: 0, pageSize: 20 })).toThrowError();
  });

  it('should return empty array when page is greater than totalPages', () => {
    const { items } = paginatedArray({ page: 6, pageSize: 20 });
    expect(items).toHaveLength(0);
  });

  it('should return the last page with the remaining items', () => {
    const { items } = paginatedArray({ page: 4, pageSize: 30 });
    expect(items).toHaveLength(10);
  });

  it('should return the first page', () => {
    const options: PaginationOptions = { page: 'first', pageSize: 20 };
    const { items, pagination } = paginatedArray(options);
    expect(items).toHaveLength(20);
    expect(pagination.page).toBe(1);
    expect(options.page).toBe('first');
  });

  it('should return the last page', () => {
    const options: PaginationOptions = { page: 'last', pageSize: 20 };
    const { items, pagination } = paginatedArray(options);
    expect(items).toHaveLength(20);
    expect(pagination.page).toBe(5);
    expect(options.page).toBe('last');
  });
});
