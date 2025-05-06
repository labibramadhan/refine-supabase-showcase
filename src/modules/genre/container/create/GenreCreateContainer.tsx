import BaseCreatePage from '@components/base-pages/create/BaseCreatePage';
import { useGenreForm } from '@modules/genre/hooks/useGenreForm';
import GenreForm from '@modules/genre/components/form/GenreForm';
import { useTranslate } from '@refinedev/core';

export default function GenreCreateContainer() {
  const t = useTranslate();

  const form = useGenreForm({});

  return (
    <BaseCreatePage
      saveButtonProps={form.saveButtonProps}
      title={t('genre.create.title', 'Create Genre')}
      resource="genres"
    >
      <GenreForm formProps={form.formProps} />
    </BaseCreatePage>
  );
}
