import { useTranslate } from '@refinedev/core';
import { useParams } from 'next/navigation';
import BorrowingShowComponent from '@modules/borrowing/components/show/BorrowingShowComponent';
import { useBorrowingShow } from '@modules/borrowing/hooks/useBorrowingShow';
import BaseShowPage from '@components/base-pages/show/BaseShowPage';

export default function BorrowingShowContainer() {
  const t = useTranslate();
  const params = useParams();
  const id = params?.id as string;
  const { data, isLoading } = useBorrowingShow(id);

  return (
    <BaseShowPage
      isLoading={isLoading}
      title={t('borrowing.titles.show', 'Borrowing Details')}
      canEdit
    >
      <BorrowingShowComponent record={data?.data} />
    </BaseShowPage>
  );
}
