'use client';

import { List } from '@refinedev/antd';
import { useBookListTable } from '@modules/book/hooks/useBookListTable';
import BookListTableComponent from '@modules/book/components/list/BookListTableComponent';
import { Card } from 'antd';
import BookListFilterComponent from '@modules/book/components/list/BookListFilterComponent';
import { useTranslation } from '@refinedev/core';

export default function BookListContainer() {
  const { translate: t } = useTranslation();
  const { tableProps, searchFormProps } = useBookListTable();

  return (
    <Card>
      <List title={t('book.titles.list', 'Books')}>
        <BookListFilterComponent formProps={searchFormProps} />
        <div className="mt-4">
          <BookListTableComponent tableProps={tableProps} />
        </div>
      </List>
    </Card>
  );
}
