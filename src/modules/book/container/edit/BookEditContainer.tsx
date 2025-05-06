import BookForm from '@modules/book/components/form/BookForm';
import { Edit } from '@refinedev/antd';
import { useTranslation } from '@refinedev/core';
import { useParams } from 'next/navigation';
import { useBookForm } from '@modules/book/hooks/useBookForm';

export default function BookEditContainer() {
  const { translate: t } = useTranslation();
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
    <Edit
      isLoading={form.formLoading}
      saveButtonProps={form.saveButtonProps}
      title={t('book.titles.edit', 'Edit Book')}
    >
      <BookForm formProps={form.formProps} />
    </Edit>
  );
}
