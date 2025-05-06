import { Member } from '@models/member';
import { useOne } from '@refinedev/core';

export const useMemberShow = (id: string) => {
  const { data, isLoading } = useOne<Member>({
    resource: 'members',
    id,
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
  });

  return {
    data,
    isLoading,
  };
};
