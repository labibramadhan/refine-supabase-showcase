import { CrudFilters } from '@refinedev/core';
import { Genre } from '@models/genre';
import { useTable } from '@refinedev/antd';

type UseGenreListTableParams = {
  initialFilter?: CrudFilters;
};

export const useGenreListTable = ({ initialFilter }: UseGenreListTableParams = {}) => {
  const { tableProps } = useTable<Genre>({
    resource: 'genres',
    pagination: {
      pageSize: 10,
    },
    sorters: {
      permanent: [
        {
          field: 'name',
          order: 'asc',
        },
      ],
    },
    filters: {
      initial: initialFilter,
    },
    meta: {
      select: `
        id,
        name
      `,
    },
    onSearch: (values: any) => {
      const filters: CrudFilters = [];

      if (values.name) {
        filters.push({
          field: 'name',
          operator: 'contains',
          value: values.name,
        });
      }

      return filters;
    },
  });

  return { tableProps };
};
