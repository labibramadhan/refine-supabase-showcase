import { Member } from '@models/member';
import { useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';
import dayjs from 'dayjs';

export const useMemberForm = ({
  useFormOptions,
}: {
  useFormOptions?: Parameters<typeof useForm<Member, HttpError, Member>>[0];
}) => {
  const form = useForm<Member, HttpError, Member>({
    resource: 'members',
    queryOptions: {
      select: (data) => {
        if (data?.data) {
          const realData = data?.data;
          data.data = {
            ...realData,
            membership_start_date: realData.membership_start_date
              ? dayjs(realData.membership_start_date)
              : undefined,
            membership_end_date: realData.membership_end_date
              ? dayjs(realData.membership_end_date)
              : undefined,
          };
        }
        return data;
      },
    },
    ...useFormOptions,
  });

  return {
    form,
  };
};
