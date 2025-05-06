'use client';

import { useBookListTable } from '@modules/book/hooks/useBookListTable';
import BookListTableComponent from '@modules/book/components/list/BookListTableComponent';
import BookListFilterComponent from '@modules/book/components/list/BookListFilterComponent';
import { useTranslate } from '@refinedev/core';
import BaseListPage from '@components/base-pages/list/BaseListPage';

export default function BookListContainer() {
  const t = useTranslate();
  const { tableProps, searchFormProps } = useBookListTable();

  return (
    <BaseListPage title={t('book.titles.list', 'Books')}>
      <BookListFilterComponent formProps={searchFormProps} />
      <div className="mt-4">
        <BookListTableComponent tableProps={tableProps} />
      </div>
    </BaseListPage>
  );
}
