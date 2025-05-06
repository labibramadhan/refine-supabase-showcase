import React from 'react';
import { useTranslate, useList } from '@refinedev/core';
import { Card, Descriptions, Button, Typography, Divider, Alert } from 'antd';
import {
  CheckCircleOutlined,
  BookOutlined,
  UserOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { useBorrowingFormStore } from '@modules/borrowing/stores/useBorrowingFormStore';
import { Member } from '@models/member';
import { Book } from '@models/book';
import { formatDate } from '@utils/format';

const { Title } = Typography;

export const ConfirmationStep: React.FC<{
  isLoading: boolean;
  onSubmit: () => void;
}> = ({ isLoading, onSubmit }) => {
  const t = useTranslate();
  const { selectedBookId, memberId, borrowDate, returnDate, notes } = useBorrowingFormStore();

  const { data: bookData } = useList<Book>({
    resource: 'books',
    pagination: {
      pageSize: 1,
    },
    filters: [{ field: 'id', operator: 'eq', value: selectedBookId }],
    meta: {
      select: '*',
    },
  });

  const selectedBook = bookData?.data?.[0];

  const { data: memberData } = useList<Member>({
    resource: 'members',
    pagination: {
      pageSize: 1,
    },
    filters: [{ field: 'id', operator: 'eq', value: memberId }],
    meta: {
      select: '*',
    },
  });

  const selectedMember = memberData?.data?.[0];

  if (!selectedBook || !selectedMember) {
    return (
      <Alert
        message={t('borrowing.dataLoading', 'Loading borrowing data...')}
        type="info"
        showIcon
      />
    );
  }

  return (
    <div className="w-full">
      <Title level={4} className="mb-6">
        <CheckCircleOutlined className="text-green-500 mr-2" />
        {t('borrowing.steps.confirmBorrowing', 'Confirm Borrowing')}
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card
          title={
            <>
              <BookOutlined /> {t('borrowing.selectedBook', 'Selected Book')}
            </>
          }
          className="shadow-sm"
        >
          <div className="flex items-center mb-4">
            <div>
              <div className="font-medium text-lg">{selectedBook.title}</div>
              <div className="text-gray-500">
                {t('books.fields.author', 'Author')}: {selectedBook.author}
              </div>
              <div className="text-gray-500">
                {selectedBook.publication_year} • {selectedBook.genre?.name}
              </div>
            </div>
          </div>

          <Descriptions size="small" column={1} bordered>
            <Descriptions.Item label={t('books.fields.isbn', 'ISBN')}>
              {selectedBook.isbn}
            </Descriptions.Item>
            {selectedBook.description && (
              <Descriptions.Item label={t('books.fields.description', 'Description')}>
                {selectedBook.description.length > 100
                  ? `${selectedBook.description.substring(0, 100)}...`
                  : selectedBook.description}
              </Descriptions.Item>
            )}
          </Descriptions>
        </Card>

        <Card
          title={
            <>
              <UserOutlined /> {t('borrowing.selectedMember', 'Selected Member')}
            </>
          }
          className="shadow-sm"
        >
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex justify-center items-center">
                <UserOutlined className="text-2xl text-gray-400" />
              </div>
            </div>
            <div>
              <div className="font-medium text-lg">
                {selectedMember.first_name} {selectedMember.last_name}
              </div>
              <div className="text-gray-500">{selectedMember.email}</div>
              <div className="text-gray-500">{selectedMember.phone_number}</div>
            </div>
          </div>

          <Descriptions size="small" column={1} bordered>
            <Descriptions.Item label={t('members.fields.address', 'Address')}>
              {selectedMember.address || '-'}
            </Descriptions.Item>
            <Descriptions.Item label={t('members.fields.status', 'Status')}>
              <span
                className={`px-2 py-1 rounded text-xs ${
                  selectedMember.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {selectedMember.status}
              </span>
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </div>

      <Card
        title={
          <>
            <CalendarOutlined /> {t('borrowing.details', 'Borrowing Details')}
          </>
        }
        className="mt-6 shadow-sm"
      >
        <Descriptions bordered column={{ xs: 1, sm: 2 }} layout="vertical">
          <Descriptions.Item label={t('borrowing.fields.borrowDate', 'Borrow Date')}>
            {borrowDate ? formatDate(borrowDate) : '-'}
          </Descriptions.Item>
          <Descriptions.Item label={t('borrowing.fields.returnDate', 'Return Date')}>
            {returnDate
              ? formatDate(returnDate)
              : t('borrowing.noReturnDate', 'No return date specified')}
          </Descriptions.Item>
          <Descriptions.Item label={t('borrowing.fields.status', 'Status')} span={2}>
            <span className="px-2 py-1 rounded bg-blue-100 text-blue-800 text-xs">
              {t('borrowing.status.borrowed', 'Borrowed')}
            </span>
          </Descriptions.Item>
          {notes && (
            <Descriptions.Item label={t('borrowing.fields.notes', 'Notes')} span={2}>
              {notes}
            </Descriptions.Item>
          )}
        </Descriptions>
      </Card>

      <Divider />

      <div className="flex justify-end">
        <Button type="primary" size="large" onClick={onSubmit} loading={isLoading} className="px-8">
          {t('buttons.confirm', 'Confirm')}
        </Button>
      </div>
    </div>
  );
};
