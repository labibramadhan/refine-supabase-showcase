import { useTranslation } from '@refinedev/core';
import { Edit } from '@refinedev/antd';
import { useGenreForm } from '@modules/genre/hooks/useGenreForm';
import GenreForm from '@modules/genre/components/form/GenreForm';
import { useParams } from 'next/navigation';

export default function GenreEditContainer() {
  const { translate: t } = useTranslation();
  const params = useParams();
  const id = params?.id as string;

  const form = useGenreForm({
    id,
  });

  return (
    <Edit
      saveButtonProps={form.saveButtonProps}
      title={t('genre.edit.title', 'Edit Genre')}
      resource="genres"
    >
      <GenreForm formProps={form.formProps} />
    </Edit>
  );
}
