import BorrowingForm from '@modules/borrowing/components/form/BorrowingForm';
import { Edit } from '@refinedev/antd';
import { useTranslation } from '@refinedev/core';
import { useParams } from 'next/navigation';
import { useBorrowingForm } from '@modules/borrowing/hooks/useBorrowingForm';

export default function BorrowingEditContainer() {
  const { translate: t } = useTranslation();
  const params = useParams();
  const id = params?.id as string;
  const { form } = useBorrowingForm({
    useFormOptions: {
      id,
      action: 'edit',
    },
  });

  return (
    <Edit
      isLoading={form.formLoading}
      saveButtonProps={form.saveButtonProps}
      title={t('borrowing.titles.edit', 'Edit Borrowing')}
    >
      <BorrowingForm formProps={form.formProps} />
    </Edit>
  );
}
