import { useSelect } from '@refinedev/antd';
import { Book } from '@models/book';

export const useBookSelect = ({
  selectOptions,
}: {
  selectOptions?: Parameters<typeof useSelect<Book>>[0];
}) => {
  const { selectProps, query } = useSelect<Book>({
    resource: 'books',
    optionLabel: 'title',
    optionValue: 'id',
    ...selectOptions,
  });

  return {
    selectProps,
    query,
  };
};
