import { Show } from '@refinedev/antd';
import { useTranslation } from '@refinedev/core';
import { useParams } from 'next/navigation';
import BookShowComponent from '@modules/book/components/show/BookShowComponent';
import { useBookShow } from '@modules/book/hooks/useBookShow';

export default function BookShowContainer() {
  const { translate: t } = useTranslation();
  const params = useParams();
  const id = params?.id as string;
  const { data, isLoading } = useBookShow(id);

  return (
    <Show
      isLoading={isLoading}
      title={t('book.titles.show', 'Book Details')}
      canEdit
      resource="books"
    >
      <BookShowComponent record={data?.data} />
    </Show>
  );
}
