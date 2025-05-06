import { Book } from '@models/book';
import { useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';

export const useBookForm = ({
  useFormOptions,
}: {
  useFormOptions?: Parameters<typeof useForm<Book, HttpError, Book>>[0];
}) => {
  const form = useForm<Book, HttpError, Book>({
    resource: 'books',
    ...useFormOptions,
  });

  return {
    form,
  };
};
