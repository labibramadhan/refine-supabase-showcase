import { Show } from '@refinedev/antd';
import { useTranslation } from '@refinedev/core';
import { useParams } from 'next/navigation';
import BorrowingShowComponent from '@modules/borrowing/components/show/BorrowingShowComponent';
import { useBorrowingShow } from '@modules/borrowing/hooks/useBorrowingShow';

export default function BorrowingShowContainer() {
  const { translate: t } = useTranslation();
  const params = useParams();
  const id = params?.id as string;
  const { data, isLoading } = useBorrowingShow(id);

  return (
    <Show
      isLoading={isLoading}
      title={t('borrowing.titles.show', 'Borrowing Details')}
      canEdit
      resource="borrowings"
    >
      <BorrowingShowComponent record={data?.data} />
    </Show>
  );
}
