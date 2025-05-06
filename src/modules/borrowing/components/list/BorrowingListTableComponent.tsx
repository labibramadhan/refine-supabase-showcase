import { useTranslate } from '@refinedev/core';
import { Table, TableProps, Space, Tag } from 'antd';
import { Borrowing } from '@models/borrowing';
import { EditButton, ShowButton, DeleteButton } from '@refinedev/antd';
import { Book } from '@models/book';
import { Member } from '@models/member';
import { formatDate } from '@utils/format';

interface BorrowingListTableComponentProps {
  tableProps: TableProps<Borrowing>;
}

export default function BorrowingListTableComponent({
  tableProps,
}: BorrowingListTableComponentProps) {
  const t = useTranslate();

  const getStatusBadge = (status?: string) => {
    if (!status) return null;

    const statusColors: Record<string, string> = {
      borrowed: 'blue',
      returned: 'green',
      overdue: 'red',
      lost: 'black',
    };

    return (
      <Tag color={statusColors[status] || 'default'}>
        {t(`borrowing.form.statusOptions.${status}`, status)}
      </Tag>
    );
  };

  const columns: TableProps<Borrowing>['columns'] = [
    {
      title: t('borrowing.table.book', 'Book'),
      dataIndex: 'book',
      key: 'book_name',
      render: (book: Book) => {
        return book ? book.title : '';
      },
    },
    {
      title: t('borrowing.table.member', 'Member'),
      dataIndex: 'member',
      key: 'member_name',
      render: (member: Member) => {
        return member ? `${member.first_name} ${member.last_name}` : '';
      },
    },
    {
      title: t('borrowing.table.borrowDate', 'Borrow Date'),
      dataIndex: 'borrow_date',
      key: 'borrow_date',
      render: (date: string) => formatDate(date),
    },
    {
      title: t('borrowing.table.returnDate', 'Return Date'),
      dataIndex: 'return_date',
      key: 'return_date',
      render: (date: string) => (date ? formatDate(date) : '-'),
    },
    {
      title: t('borrowing.table.status', 'Status'),
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => getStatusBadge(status),
    },
    {
      title: t('common.actions', 'Actions'),
      dataIndex: 'actions',
      key: 'actions',
      fixed: 'right',
      width: 180,
      render: (_, record: Borrowing) => (
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
