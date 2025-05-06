import { useTranslation } from '@refinedev/core';
import { Form, Select, Button, Card, Row, Col } from 'antd';
import { SearchOutlined, UndoOutlined } from '@ant-design/icons';
import { useMemberSelect } from '@modules/member/hooks/useMemberSelect';
import { useBookSelect } from '@modules/book/hooks/useBookSelect';

export type BorrowingListFilterProps = {
  formProps: any;
  isResetButtonDisabled: boolean;
  isSearchButtonDisabled: boolean;
};

export default function BorrowingListFilterComponent({
  formProps,
  isResetButtonDisabled,
  isSearchButtonDisabled,
}: BorrowingListFilterProps) {
  const { translate: t } = useTranslation();

  const { selectProps: bookSelectProps } = useBookSelect({});

  const { selectProps: memberSelectProps } = useMemberSelect({});

  const statusOptions = [
    { value: '', label: t('common.all', 'All') },
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

  return (
    <Card className="mb-4">
      <Form layout="vertical" {...formProps} className="mb-0">
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item name="book_id" label={t('borrowing.filter.book', 'Book')}>
              <Select
                allowClear
                placeholder={t('borrowing.filter.bookPlaceholder', 'Select a book')}
                {...bookSelectProps}
                showSearch
                filterOption={(input, option) =>
                  option?.label?.toString().toLowerCase().includes(input.toLowerCase()) ?? false
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item name="member_id" label={t('borrowing.filter.member', 'Member')}>
              <Select
                allowClear
                placeholder={t('borrowing.filter.memberPlaceholder', 'Select a member')}
                {...memberSelectProps}
                showSearch
                filterOption={(input, option) =>
                  option?.label?.toString().toLowerCase().includes(input.toLowerCase()) ?? false
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item name="status" label={t('borrowing.filter.status', 'Status')}>
              <Select
                options={statusOptions}
                placeholder={t('borrowing.filter.statusPlaceholder', 'Select status')}
                allowClear
              />
            </Form.Item>
          </Col>
          <Col xs={24} className="flex justify-end">
            <Row gutter={8}>
              <Col>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="mr-2"
                  icon={<SearchOutlined />}
                  disabled={isSearchButtonDisabled}
                >
                  {t('common.search', 'Search')}
                </Button>
              </Col>
              <Col>
                <Button
                  onClick={() => {
                    formProps.form?.resetFields();
                    formProps.form?.submit();
                  }}
                  icon={<UndoOutlined />}
                  disabled={isResetButtonDisabled}
                >
                  {t('common.reset', 'Reset')}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
