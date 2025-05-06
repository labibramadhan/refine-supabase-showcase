import { useTranslation } from '@refinedev/core';
import { Create } from '@refinedev/antd';
import { useGenreForm } from '@modules/genre/hooks/useGenreForm';
import GenreForm from '@modules/genre/components/form/GenreForm';

export default function GenreCreateContainer() {
  const { translate: t } = useTranslation();

  const form = useGenreForm({});

  return (
    <Create
      saveButtonProps={form.saveButtonProps}
      title={t('genre.create.title', 'Create Genre')}
      resource="genres"
    >
      <GenreForm formProps={form.formProps} />
    </Create>
  );
}
