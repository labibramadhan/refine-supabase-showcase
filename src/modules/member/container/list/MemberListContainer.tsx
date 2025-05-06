'use client';

import { List } from '@refinedev/antd';
import { useMemberListTable } from '@modules/member/hooks/useMemberListTable';
import MemberListTable from '@modules/member/components/list/MemberListTableComponent';
import { Card } from 'antd';
import MemberListFilterComponent from '@modules/member/components/list/MemberListFilterComponent';

export default function MemberListContainer() {
  const { tableProps, searchFormProps, isLoading } = useMemberListTable();
  return (
    <Card>
      <List>
        <MemberListFilterComponent
          formProps={searchFormProps}
          isResetButtonDisabled={isLoading}
          isSearchButtonDisabled={isLoading}
        />
        <div className="mt-4">
          <MemberListTable tableProps={tableProps} />
        </div>
      </List>
    </Card>
  );
}
