import BaseShowPage from '@components/base-pages/show/BaseShowPage';
import { useTranslate } from '@refinedev/core';
import { useParams } from 'next/navigation';
import BookShowComponent from '@modules/book/components/show/BookShowComponent';
import { useBookShow } from '@modules/book/hooks/useBookShow';

export default function BookShowContainer() {
  const t = useTranslate();
  const params = useParams();
  const id = params?.id as string;
  const { data, isLoading } = useBookShow(id);

  return (
    <BaseShowPage
      isLoading={isLoading}
      title={t('book.titles.show', 'Book Details')}
      canEdit
      resource="books"
    >
      <BookShowComponent record={data?.data} />
    </BaseShowPage>
  );
}
