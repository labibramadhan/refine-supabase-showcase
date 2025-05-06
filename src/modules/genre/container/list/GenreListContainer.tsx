import { useGenreListTable } from '@modules/genre/hooks/useGenreListTable';
import { GenreListTableComponent } from '@modules/genre/components/list/GenreListTableComponent';
import { List } from '@refinedev/antd';
import { Card } from 'antd';

export default function GenreListContainer() {
  const { tableProps } = useGenreListTable();

  return (
    <Card>
      <List>
        <GenreListTableComponent tableProps={tableProps} />
      </List>
    </Card>
  );
}
