# Paginated

This module provides a `paginate` function to help you paginate arrays of data on Frontend. The function supports specifying a page number and page size, and it returns a paginated result including the items for the specified page and pagination details.

## Installation

You can install it via npm:

```bash
npm install @jgereg/paginated
```

## Usage

Import the `paginate` function into your project and use it to paginate an array.

```typescript
import { paginate } from '@jgereg/paginated';

const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
//Example data: [ 'Item 1', 'Item 2', 'Item 3', ..., 'Item 100' ]

const result = paginate(data)({ page: 2, pageSize: 5 });
console.log(result);

// Output:
//{
//  items: [ 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10' ],
//  pagination: { totalRecord: 100, totalPages: 20, pageSize: 5, page: 2 }
//}
```

## Parameters

### PaginationOptions

- `page` (number | 'first' | 'last'): The page number to retrieve. Use `'first'` for the first page and `'last'` for the last page.
- `pageSize` (number): The number of items per page.

### PaginationResult

- `items` (T[]): An array of items for the specified page.
- `pagination`: An object containing pagination details:
  - `totalRecord` (number): The total number of items in the array.
  - `totalPages` (number): The total number of pages.
  - `pageSize` (number): The number of items per page.
  - `page` (number): The current page number.
