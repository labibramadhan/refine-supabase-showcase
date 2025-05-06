'use client';

import { useMemberListTable } from '@modules/member/hooks/useMemberListTable';
import MemberListTable from '@modules/member/components/list/MemberListTableComponent';
import MemberListFilterComponent from '@modules/member/components/list/MemberListFilterComponent';
import BaseListPage from '@components/base-pages/list/BaseListPage';

export default function MemberListContainer() {
  const { tableProps, searchFormProps, isLoading } = useMemberListTable();
  return (
    <BaseListPage>
      <MemberListFilterComponent
        formProps={searchFormProps}
        isResetButtonDisabled={isLoading}
        isSearchButtonDisabled={isLoading}
      />
      <div className="mt-4">
        <MemberListTable tableProps={tableProps} />
      </div>
    </BaseListPage>
  );
}
