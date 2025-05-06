import React from 'react';
import { useTranslate, useList } from '@refinedev/core';
import { Form, DatePicker, Select, Input, Card } from 'antd';
import { useBorrowingFormStore } from '@modules/borrowing/stores/useBorrowingFormStore';
import { Member } from '@models/member';
import { Book } from '@models/book';
import { UserOutlined, BookOutlined, CalendarOutlined, MessageOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { TextArea } = Input;
const { Option } = Select;

export const BorrowingDetailsStep: React.FC = () => {
  const t = useTranslate();
  const {
    memberId,
    borrowDate,
    returnDate,
    notes,
    selectedBookId,
    setMemberId,
    setBorrowDate,
    setReturnDate,
    setNotes,
    errors,
  } = useBorrowingFormStore();

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

  const { data: membersData, isLoading: isMembersLoading } = useList<Member>({
    resource: 'members',
    pagination: {
      pageSize: 100,
    },
    meta: {
      select: '*',
    },
  });

  const disabledBorrowDate = (current: dayjs.Dayjs) => {
    return current && current < dayjs().startOf('day');
  };

  const disabledReturnDate = (current: dayjs.Dayjs) => {
    if (!borrowDate) return current && current < dayjs().startOf('day');
    return current && current < borrowDate;
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-medium mb-4">
        {t('borrowing.steps.enterDetails', 'Enter Borrowing Details')}
      </h2>

      {selectedBook && (
        <Card
          title={
            <>
              <BookOutlined /> {t('borrowing.selectedBook', 'Selected Book')}
            </>
          }
          className="mb-6"
          size="small"
        >
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="font-medium">{selectedBook.title}</div>
            <div className="md:ml-4 text-gray-500">
              {t('books.fields.author', 'Author')}: {selectedBook.author}
            </div>
            <div className="md:ml-4 text-gray-500">
              {t('books.fields.isbn', 'ISBN')}: {selectedBook.isbn}
            </div>
          </div>
        </Card>
      )}

      <Form layout="vertical" className="borrowing-form">
        <Form.Item
          label={
            <>
              <UserOutlined /> {t('borrowing.fields.member', 'Member')}
            </>
          }
          required
          validateStatus={errors.memberSelection ? 'error' : undefined}
          help={
            errors.memberSelection
              ? t('borrowing.validation.selectMember', 'Please select a member')
              : undefined
          }
        >
          <Select
            placeholder={t('borrowing.selectMember', 'Select a member')}
            loading={isMembersLoading}
            value={memberId || undefined}
            onChange={setMemberId}
            showSearch
            optionFilterProp="children"
            className="w-full"
          >
            {membersData?.data?.map((member) => (
              <Option key={member.id} value={member.id}>
                {member.first_name} {member.last_name} ({member.email})
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label={
            <>
              <CalendarOutlined /> {t('borrowing.fields.borrowDate', 'Borrow Date')}
            </>
          }
          required
          validateStatus={errors.borrowDate ? 'error' : undefined}
          help={
            errors.borrowDate
              ? t('borrowing.validation.selectBorrowDate', 'Please select a borrow date')
              : undefined
          }
        >
          <DatePicker
            className="w-full"
            placeholder={t('borrowing.selectDate', 'Select date')}
            value={borrowDate}
            onChange={setBorrowDate}
            disabledDate={disabledBorrowDate}
            format="YYYY-MM-DD"
          />
        </Form.Item>

        <Form.Item
          label={
            <>
              <CalendarOutlined /> {t('borrowing.fields.returnDate', 'Return Date')}
            </>
          }
        >
          <DatePicker
            className="w-full"
            placeholder={t('borrowing.selectDate', 'Select date')}
            value={returnDate}
            onChange={setReturnDate}
            disabledDate={disabledReturnDate}
            format="YYYY-MM-DD"
          />
        </Form.Item>

        <Form.Item
          label={
            <>
              <MessageOutlined /> {t('borrowing.fields.notes', 'Notes')}
            </>
          }
        >
          <TextArea
            placeholder={t('borrowing.enterNotes', 'Enter any notes about this borrowing')}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
          />
        </Form.Item>
      </Form>
    </div>
  );
};
