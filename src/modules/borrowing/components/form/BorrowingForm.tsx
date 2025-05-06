import { Form, Input, DatePicker, Select, Row, Col } from 'antd';
import { useTranslate } from '@refinedev/core';
import type { FormProps } from 'antd';
import { useEffect } from 'react';
import { useBookSelect } from '@modules/book/hooks/useBookSelect';
import { useMemberSelect } from '@modules/member/hooks/useMemberSelect';

export type BorrowingFormProps = {
  formProps?: FormProps;
};

export default function BorrowingForm({ formProps }: BorrowingFormProps) {
  const t = useTranslate();

  const { selectProps: bookSelectProps, query: bookQuery } = useBookSelect({});

  const { selectProps: memberSelectProps, query: memberQuery } = useMemberSelect({});

  const statusOptions = [
    {
      value: 'borrowed',
      label: t('borrowing.form.statusOptions.borrowed', 'Borrowed'),
    },
    {
      value: 'returned',
      label: t('borrowing.form.statusOptions.returned', 'Returned'),
    },
    {
      value: 'overdue',
      label: t('borrowing.form.statusOptions.overdue', 'Overdue'),
    },
    { value: 'lost', label: t('borrowing.form.statusOptions.lost', 'Lost') },
  ];

  useEffect(() => {
    const form = formProps?.form;
    if (form && !form.getFieldValue('status')) {
      form.setFieldsValue({ status: 'borrowed' });
    }
  }, [formProps?.form]);

  return (
    <Form layout="vertical" {...formProps} className="w-full mx-auto">
      <Row gutter={[24, 16]}>
        <Col xs={24} md={12}>
          <Form.Item
            name="book_id"
            label={t('borrowing.form.book', 'Book')}
            rules={[
              {
                required: true,
                message: t('borrowing.form.validation.bookRequired', 'Please select a book'),
              },
            ]}
          >
            <Select
              placeholder={t('borrowing.form.bookPlaceholder', 'Select a book')}
              {...bookSelectProps}
              loading={bookQuery.isLoading}
              showSearch
              filterOption={(input, option) =>
                option?.label?.toString().toLowerCase().includes(input.toLowerCase()) ?? false
              }
              className="w-full"
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            name="member_id"
            label={t('borrowing.form.member', 'Member')}
            rules={[
              {
                required: true,
                message: t('borrowing.form.validation.memberRequired', 'Please select a member'),
              },
            ]}
          >
            <Select
              placeholder={t('borrowing.form.memberPlaceholder', 'Select a member')}
              {...memberSelectProps}
              loading={memberQuery.isLoading}
              showSearch
              filterOption={(input, option) =>
                option?.label?.toString().toLowerCase().includes(input.toLowerCase()) ?? false
              }
              className="w-full"
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            name="borrow_date"
            label={t('borrowing.form.borrowDate', 'Borrow Date')}
            rules={[
              {
                required: true,
                message: t(
                  'borrowing.form.validation.borrowDateRequired',
                  'Please select borrow date',
                ),
              },
            ]}
          >
            <DatePicker
              className="w-full"
              format="YYYY-MM-DD"
              placeholder={t('borrowing.form.borrowDatePlaceholder', 'Select borrow date')}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item name="return_date" label={t('borrowing.form.returnDate', 'Return Date')}>
            <DatePicker
              className="w-full"
              format="YYYY-MM-DD"
              placeholder={t('borrowing.form.returnDatePlaceholder', 'Select return date')}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            name="status"
            label={t('borrowing.form.status', 'Status')}
            rules={[
              {
                required: true,
                message: t('borrowing.form.validation.statusRequired', 'Please select status'),
              },
            ]}
          >
            <Select
              options={statusOptions}
              placeholder={t('borrowing.form.statusPlaceholder', 'Select status')}
              className="w-full"
            />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="notes" label={t('borrowing.form.notes', 'Notes')}>
            <Input.TextArea
              rows={4}
              placeholder={t('borrowing.form.notesPlaceholder', 'Enter notes about this borrowing')}
              className="w-full"
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
