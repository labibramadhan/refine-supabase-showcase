import { Book } from '@models/book';
import { useTable } from '@refinedev/antd';
import { CrudFilter } from '@refinedev/core';

export const useBookListTable = () => {
  const { tableProps, filters, setFilters, setPageSize, searchFormProps } = useTable<Book>({
    resource: 'books',
    meta: {
      select: `
         id,
         title,
         author,
         isbn,
         publication_year,
         genre_id,
         genre:genre_id!inner (*),
         description,
         created_at,
         updated_at
        `,
    },
    filters: {
      defaultBehavior: 'replace',
    },
    onSearch: (data: any) => {
      const filters: CrudFilter[] = [];

      if (data?.title) {
        filters.push({
          field: 'title',
          operator: 'contains',
          value: data.title,
        });
      }

      if (data?.author) {
        filters.push({
          field: 'author',
          operator: 'contains',
          value: data.author,
        });
      }

      if (data?.isbn) {
        filters.push({
          field: 'isbn',
          operator: 'contains',
          value: data.isbn,
        });
      }

      if (data?.genre_id) {
        filters.push({
          field: 'genre_id',
          operator: 'eq',
          value: data.genre_id,
        });
      }

      return filters;
    },
  });

  return {
    tableProps,
    filters,
    setFilters,
    setPageSize,
    searchFormProps,
  };
};
