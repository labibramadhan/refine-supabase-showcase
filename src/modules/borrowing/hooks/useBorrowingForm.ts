import { Borrowing } from '@models/borrowing';
import { useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';
import dayjs from 'dayjs';

export const useBorrowingForm = ({
  useFormOptions,
}: {
  useFormOptions?: Parameters<typeof useForm<Borrowing, HttpError, Borrowing>>[0];
}) => {
  const form = useForm<Borrowing, HttpError, Borrowing>({
    resource: 'borrowings',
    queryOptions: {
      select: (data) => {
        if (data?.data) {
          const realData = data?.data;
          data.data = {
            ...realData,
            borrow_date: realData.borrow_date ? dayjs(realData.borrow_date) : undefined,
            return_date: realData.return_date ? dayjs(realData.return_date) : undefined,
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
