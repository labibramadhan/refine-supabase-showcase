import { Book } from '@models/book';
import { useOne } from '@refinedev/core';

export const useBookShow = (id: string) => {
  const { data, isLoading } = useOne<Book>({
    resource: 'books',
    id,
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
  });

  return {
    data,
    isLoading,
  };
};
