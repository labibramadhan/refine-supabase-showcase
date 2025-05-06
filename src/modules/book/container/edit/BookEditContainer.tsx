import BookForm from '@modules/book/components/form/BookForm';
import { useTranslate } from '@refinedev/core';
import { useParams } from 'next/navigation';
import { useBookForm } from '@modules/book/hooks/useBookForm';
import BaseEditPage from '@components/base-pages/edit/BaseEditPage';

export default function BookEditContainer() {
  const t = useTranslate();
  const params = useParams();
  const id = params?.id as string;
  const { form } = useBookForm({
    useFormOptions: {
      resource: 'books',
      id,
      action: 'edit',
    },
  });

  return (
    <BaseEditPage
      isLoading={form.formLoading}
      saveButtonProps={form.saveButtonProps}
      title={t('book.titles.edit', 'Edit Book')}
    >
      <BookForm formProps={form.formProps} />
    </BaseEditPage>
  );
}
