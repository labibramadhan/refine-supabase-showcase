import BookForm from '@modules/book/components/form/BookForm';
import { useBookForm } from '@modules/book/hooks/useBookForm';
import { Create } from '@refinedev/antd';
import { useTranslation } from '@refinedev/core';

export default function BookCreateContainer() {
  const { translate: t } = useTranslation();
  const { form } = useBookForm({});

  return (
    <Create
      saveButtonProps={form.saveButtonProps}
      title={t('book.titles.create', 'Create New Book')}
    >
      <BookForm formProps={form.formProps} />
    </Create>
  );
}
