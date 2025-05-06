import { Borrowing } from '@models/borrowing';
import { useTable } from '@refinedev/antd';
import { CrudFilter } from '@refinedev/core';

export const useBorrowingListTable = () => {
  const {
    tableProps,
    filters,
    setFilters,
    setPageSize,
    searchFormProps,
    tableQuery: { isFetching },
  } = useTable<Borrowing>({
    resource: 'borrowings',
    meta: {
      select: `
        id,
        book_id,
        book:book_id!inner (*),
        member_id,
        member:member_id!inner (*),
        borrow_date,
        return_date,
        status,
        notes,
        created_at,
        updated_at
      `,
    },
    filters: {
      defaultBehavior: 'replace',
    },
    onSearch: (data: any) => {
      const filters: CrudFilter[] = [];

      if (data?.book_id) {
        filters.push({
          field: 'book_id',
          operator: 'eq',
          value: data.book_id,
        });
      }

      if (data?.member_id) {
        filters.push({
          field: 'member_id',
          operator: 'eq',
          value: data.member_id,
        });
      }

      if (data?.status) {
        filters.push({
          field: 'status',
          operator: 'eq',
          value: data.status,
        });
      }

      return filters;
    },
  });

  return {
    isLoading: isFetching,
    tableProps,
    filters,
    setFilters,
    setPageSize,
    searchFormProps,
  };
};
