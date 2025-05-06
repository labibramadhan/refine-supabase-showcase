import BorrowingForm from '@modules/borrowing/components/form/BorrowingForm';
import { useTranslate } from '@refinedev/core';
import { useParams } from 'next/navigation';
import { useBorrowingForm } from '@modules/borrowing/hooks/useBorrowingForm';
import BaseEditPage from '@components/base-pages/edit/BaseEditPage';

export default function BorrowingEditContainer() {
  const t = useTranslate();
  const params = useParams();
  const id = params?.id as string;
  const { form } = useBorrowingForm({
    useFormOptions: {
      id,
      action: 'edit',
    },
  });

  return (
    <BaseEditPage
      isLoading={form.formLoading}
      saveButtonProps={form.saveButtonProps}
      title={t('borrowing.titles.edit', 'Edit Borrowing')}
    >
      <BorrowingForm formProps={form.formProps} />
    </BaseEditPage>
  );
}
