import { useSelect } from '@refinedev/antd';
import { Member } from '@models/member';

export const useMemberSelect = ({
  selectOptions,
}: {
  selectOptions?: Parameters<typeof useSelect<Member>>[0];
}) => {
  const { selectProps, query } = useSelect<Member>({
    resource: 'members',
    optionLabel: (record) => `${record.first_name} ${record.last_name}`,
    optionValue: 'id',
    ...selectOptions,
  });

  return {
    selectProps,
    query,
  };
};
