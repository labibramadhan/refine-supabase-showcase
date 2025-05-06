import { Borrowing } from '@models/borrowing';
import { useOne } from '@refinedev/core';

export const useBorrowingShow = (id: string) => {
  const { data, isLoading } = useOne<Borrowing>({
    resource: 'borrowings',
    id,
  });

  return {
    data,
    isLoading,
  };
};
