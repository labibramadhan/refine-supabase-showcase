'use client';

import { List } from '@refinedev/antd';
import { useBorrowingListTable } from '@modules/borrowing/hooks/useBorrowingListTable';
import BorrowingListTableComponent from '@modules/borrowing/components/list/BorrowingListTableComponent';
import { Card } from 'antd';
import BorrowingListFilterComponent from '@modules/borrowing/components/list/BorrowingListFilterComponent';
import { useTranslation } from '@refinedev/core';

export default function BorrowingListContainer() {
  const { translate: t } = useTranslation();
  const { tableProps, searchFormProps, isLoading } = useBorrowingListTable();

  return (
    <Card>
      <List title={t('borrowing.titles.list', 'Borrowings')}>
        <BorrowingListFilterComponent
          formProps={searchFormProps}
          isResetButtonDisabled={isLoading}
          isSearchButtonDisabled={isLoading}
        />
        <div className="mt-4">
          <BorrowingListTableComponent tableProps={tableProps} />
        </div>
      </List>
    </Card>
  );
}
