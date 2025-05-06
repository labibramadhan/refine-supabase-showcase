import { useBorrowingForm } from '@modules/borrowing/hooks/useBorrowingForm';
import { useBorrowingFormStore } from '@modules/borrowing/stores/useBorrowingFormStore';
import { MultiStepBorrowingForm } from '@modules/borrowing/components/form/MultiStepBorrowingForm';
import { Create } from '@refinedev/antd';
import { useTranslation, useNavigation } from '@refinedev/core';
import { useEffect } from 'react';

export default function BorrowingCreateContainer() {
  const { translate: t } = useTranslation();
  const { push } = useNavigation();
  const resetForm = useBorrowingFormStore((state) => state.resetForm);

  const { form } = useBorrowingForm({});

  const handleSuccess = () => {
    resetForm();
    push('/borrowing/list');
  };

  useEffect(() => {
    return () => {
      resetForm();
    };
  }, [resetForm]);

  const handleFormSubmit = (values: any) => {
    form
      .onFinish(values)
      .then(() => {
        handleSuccess();
      })
      .catch((error) => {
        console.error('Error creating borrowing:', error);
      });
  };

  return (
    <Create
      title={t('borrowing.titles.create', 'Create New Borrowing')}
      saveButtonProps={{
        style: { display: 'none' },
      }}
      goBack={<div />}
    >
      <MultiStepBorrowingForm isLoading={form.formLoading} onFinish={handleFormSubmit} />
    </Create>
  );
}
