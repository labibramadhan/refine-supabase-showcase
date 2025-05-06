'use client';

import { useBorrowingListTable } from '@modules/borrowing/hooks/useBorrowingListTable';
import BorrowingListTableComponent from '@modules/borrowing/components/list/BorrowingListTableComponent';
import BorrowingListFilterComponent from '@modules/borrowing/components/list/BorrowingListFilterComponent';
import { useTranslate } from '@refinedev/core';
import BaseListPage from '@components/base-pages/list/BaseListPage';

export default function BorrowingListContainer() {
  const t = useTranslate();
  const { tableProps, searchFormProps, isLoading } = useBorrowingListTable();

  return (
    <BaseListPage title={t('borrowing.titles.list', 'Borrowings')}>
      <BorrowingListFilterComponent
        formProps={searchFormProps}
        isResetButtonDisabled={isLoading}
        isSearchButtonDisabled={isLoading}
      />
      <div className="mt-4">
        <BorrowingListTableComponent tableProps={tableProps} />
      </div>
    </BaseListPage>
  );
}
