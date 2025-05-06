import { useSelect } from '@refinedev/antd';
import { Genre } from '@models/genre';

export const useGenreSelect = ({
  selectOptions,
}: {
  selectOptions?: Parameters<typeof useSelect<Genre>>[0];
}) => {
  const { selectProps, query } = useSelect<Genre>({
    resource: 'genres',
    optionLabel: 'name',
    optionValue: 'id',
    ...selectOptions,
  });

  return {
    selectProps,
    query,
  };
};
