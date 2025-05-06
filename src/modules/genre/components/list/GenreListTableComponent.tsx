import { useTranslate } from '@refinedev/core';
import { Table, TableProps, Space } from 'antd';
import { Genre } from '@models/genre';
import { EditButton, DeleteButton } from '@refinedev/antd';

export type GenreListTableComponentProps = {
  tableProps: TableProps<Genre>;
};

export function GenreListTableComponent({ tableProps }: GenreListTableComponentProps) {
  const t = useTranslate();

  const columns: TableProps<Genre>['columns'] = [
    {
      title: t('genre.table.name', 'Name'),
      dataIndex: 'name',
      key: 'name',
      sorter: true,
    },
    {
      title: t('common.actions', 'Actions'),
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <EditButton recordItemId={record.id} hideText size="small" />
          <DeleteButton recordItemId={record.id} hideText size="small" />
        </Space>
      ),
    },
  ];

  return (
    <Table
      {...tableProps}
      columns={columns}
      rowKey="id"
      pagination={{
        ...tableProps.pagination,
        showSizeChanger: true,
      }}
    />
  );
}
