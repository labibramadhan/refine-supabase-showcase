import { Member } from '@models/member';
import { useTable } from '@refinedev/antd';
import { CrudFilter } from '@refinedev/core';

export const useMemberListTable = () => {
  const {
    tableProps,
    filters,
    setFilters,
    setPageSize,
    searchFormProps,
    tableQuery: { isFetching },
  } = useTable<Member>({
    resource: 'members',
    meta: {
      select: `
        id,
        first_name,
        last_name,
        email,
        phone_number,
        address,
        membership_start_date,
        membership_end_date,
        status,
        created_at,
        updated_at
        `,
    },
    filters: {
      defaultBehavior: 'replace',
    },
    onSearch: (data: any) => {
      const filters: CrudFilter[] = [];

      if (data?.first_name) {
        filters.push({
          field: 'first_name',
          operator: 'contains',
          value: data.first_name,
        });
      }

      if (data?.last_name) {
        filters.push({
          field: 'last_name',
          operator: 'contains',
          value: data.last_name,
        });
      }

      if (data?.email) {
        filters.push({
          field: 'email',
          operator: 'contains',
          value: data.email,
        });
      }

      if (data?.phone_number) {
        filters.push({
          field: 'phone_number',
          operator: 'contains',
          value: data.phone_number,
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
