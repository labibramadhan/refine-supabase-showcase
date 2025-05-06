'use client';

import { Space, Table, TableProps } from 'antd';
import { DeleteButton, EditButton, ShowButton } from '@refinedev/antd';
import { Member } from '@models/member';

export type MemberListTableProps = {
  tableProps: TableProps<Member>;
};

export default function MemberListTable({ tableProps }: MemberListTableProps) {
  const columns: TableProps<Member>['columns'] = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone_number',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Membership Start Date',
      dataIndex: 'membership_start_date',
      key: 'membership_start_date',
    },
    {
      title: 'Membership End Date',
      dataIndex: 'membership_end_date',
      key: 'membership_end_date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, v: Member) => {
        return (
          <Space>
            <ShowButton hideText recordItemId={v.id} />
            <EditButton hideText recordItemId={v.id} />
            <DeleteButton hideText recordItemId={v.id} />
          </Space>
        );
      },
    },
  ];
  return (
    <Table
      {...tableProps}
      columns={columns}
      rowKey="id"
      pagination={{ ...tableProps.pagination, showSizeChanger: true }}
    />
  );
}
