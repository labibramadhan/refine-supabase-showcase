import { useTranslate } from '@refinedev/core';
import { Table, TableProps, Space } from 'antd';
import { Book } from '@models/book';
import { EditButton, ShowButton, DeleteButton } from '@refinedev/antd';

interface BookListTableComponentProps {
  tableProps: TableProps<Book>;
}

export default function BookListTableComponent({ tableProps }: BookListTableComponentProps) {
  const t = useTranslate();

  const columns: TableProps<Book>['columns'] = [
    {
      title: t('book.table.title', 'Title'),
      dataIndex: 'title',
      key: 'title',
      sorter: true,
    },
    {
      title: t('book.table.author', 'Author'),
      dataIndex: 'author',
      key: 'author',
      sorter: true,
    },
    {
      title: t('book.table.isbn', 'ISBN'),
      dataIndex: 'isbn',
      key: 'isbn',
    },
    {
      title: t('book.table.publicationYear', 'Year'),
      dataIndex: 'publication_year',
      key: 'publication_year',
      width: 100,
    },
    {
      title: t('book.table.genre', 'Genre'),
      dataIndex: ['genre', 'name'],
      key: 'genre_name',
    },
    {
      title: t('common.actions', 'Actions'),
      dataIndex: 'actions',
      key: 'actions',
      fixed: 'right',
      width: 180,
      render: (_, record: Book) => (
        <Space>
          <ShowButton hideText recordItemId={record.id} />
          <EditButton hideText recordItemId={record.id} />
          <DeleteButton hideText recordItemId={record.id} />
        </Space>
      ),
    },
  ];

  return (
    <Table
      {...tableProps}
      columns={columns}
      rowKey="id"
      scroll={{ x: 1000 }}
      pagination={{
        ...tableProps.pagination,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '50', '100'],
      }}
    />
  );
}
