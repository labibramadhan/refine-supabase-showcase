import BaseEditPage from '@components/base-pages/edit/BaseEditPage';
import { useGenreForm } from '@modules/genre/hooks/useGenreForm';
import GenreForm from '@modules/genre/components/form/GenreForm';
import { useParams } from 'next/navigation';
import { useTranslate } from '@refinedev/core';

export default function GenreEditContainer() {
  const t = useTranslate();
  const params = useParams();
  const id = params?.id as string;

  const form = useGenreForm({
    id,
  });

  return (
    <BaseEditPage
      saveButtonProps={form.saveButtonProps}
      title={t('genre.edit.title', 'Edit Genre')}
      resource="genres"
    >
      <GenreForm formProps={form.formProps} />
    </BaseEditPage>
  );
}
