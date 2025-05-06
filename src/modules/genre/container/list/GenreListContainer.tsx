import { useGenreListTable } from '@modules/genre/hooks/useGenreListTable';
import { GenreListTableComponent } from '@modules/genre/components/list/GenreListTableComponent';
import BaseListPage from '@components/base-pages/list/BaseListPage';

export default function GenreListContainer() {
  const { tableProps } = useGenreListTable();

  return (
    <BaseListPage>
      <GenreListTableComponent tableProps={tableProps} />
    </BaseListPage>
  );
}
