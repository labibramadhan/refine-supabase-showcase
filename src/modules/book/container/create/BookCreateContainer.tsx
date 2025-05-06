import BookForm from '@modules/book/components/form/BookForm';
import { useBookForm } from '@modules/book/hooks/useBookForm';
import { useTranslate } from '@refinedev/core';
import BaseCreatePage from '@components/base-pages/create/BaseCreatePage';

export default function BookCreateContainer() {
  const t = useTranslate();
  const { form } = useBookForm({});

  return (
    <BaseCreatePage
      saveButtonProps={form.saveButtonProps}
      title={t('book.titles.create', 'Create New Book')}
    >
      <BookForm formProps={form.formProps} />
    </BaseCreatePage>
  );
}
