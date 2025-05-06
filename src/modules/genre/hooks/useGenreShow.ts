import { useOne } from '@refinedev/core';
import { Genre } from '@models/genre';

export const useGenreShow = (id: string) => {
  return useOne<Genre>({
    resource: 'genres',
    id,
    meta: {
      select: `
        id, 
        name,
        created_at,
        updated_at
      `,
    },
  });
};
