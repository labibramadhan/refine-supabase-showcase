import React from 'react';
import { useTranslate } from '@refinedev/core';
import { Card, Input, Select, Button, Row, Col, Radio, Typography, Alert, Table, Form } from 'antd';
import { SearchOutlined, CheckCircleFilled, UndoOutlined } from '@ant-design/icons';
import { useTable } from '@refinedev/antd';
import type { ColumnType } from 'antd/es/table';
import { useBorrowingFormStore } from '@modules/borrowing/stores/useBorrowingFormStore';
import { Book } from '@models/book';
import { useGenreSelect } from '@modules/genre/hooks/useGenreSelect';

const { Title, Text } = Typography;
const { Option } = Select;

export const BookSelectionStep: React.FC = () => {
  const t = useTranslate();
  const { selectedBookId, setSelectedBookId, errors } = useBorrowingFormStore();

  const { selectProps: genreSelectProps } = useGenreSelect({});

  const { tableProps, searchFormProps, setFilters } = useTable<Book>({
    resource: 'books',
    pagination: {
      pageSize: 10,
    },
    meta: {
      select: '*, genre:genre_id!inner (*)',
    },
  });

  const handleClearFilters = () => {
    setFilters([], 'replace');
  };
  const currentYear = new Date().getFullYear();
  const publicationYears = Array.from({ length: 50 }, (_, i) => (currentYear - i).toString());

  const handleBookSelection = (record: Book) => {
    setSelectedBookId(record.id);
  };
  const columns: ColumnType<Book>[] = [
    {
      title: '',
      dataIndex: 'selection',
      key: 'selection',
      width: 50,
      render: (_: any, record: Book) => (
        <Radio
          checked={selectedBookId === record.id}
          onChange={() => handleBookSelection(record)}
        />
      ),
    },
    {
      title: t('books.fields.title', 'Title'),
      dataIndex: 'title',
      key: 'title',
      sorter: true,
      render: (title: string, record: Book) => (
        <div className="font-medium">
          {title}
          {selectedBookId === record.id && <CheckCircleFilled className="ml-2 text-green-500" />}
        </div>
      ),
    },
    {
      title: t('books.fields.author', 'Author'),
      dataIndex: 'author',
      key: 'author',
      sorter: true,
    },
    {
      title: t('books.fields.genre', 'Genre'),
      dataIndex: ['genre', 'name'],
      key: 'genre_name',
      sorter: true,
    },
    {
      title: t('books.fields.publicationYear', 'Year'),
      dataIndex: 'publication_year',
      key: 'publication_year',
      sorter: true,
      width: 130,
    },
  ];

  return (
    <div className="w-full">
      <Title level={4}>{t('borrowing.steps.selectBook', 'Select a Book')}</Title>
      <Text type="secondary" className="mb-4 block">
        {t(
          'borrowing.steps.selectBookDescription',
          'Browse and select a book from the library to borrow',
        )}
      </Text>

      {errors.bookSelection && (
        <Alert
          message={t('borrowing.validation.selectBook', 'Please select a book to continue')}
          type="error"
          showIcon
          className="mb-4"
        />
      )}

      {/* Search form provided by Refine */}
      <Card className="mb-4">
        <Form {...searchFormProps} layout="vertical">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8} md={6}>
              <Form.Item name="title" label={t('books.fields.title', 'Title')}>
                <Input
                  prefix={<SearchOutlined />}
                  placeholder={t('books.fields.title', 'Title')}
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8} md={6}>
              <Form.Item name="author" label={t('books.fields.author', 'Author')}>
                <Input
                  prefix={<SearchOutlined />}
                  placeholder={t('books.fields.author', 'Author')}
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8} md={6}>
              <Form.Item name="genre" label={t('books.fields.genre', 'Genre')}>
                <Select
                  {...genreSelectProps}
                  placeholder={t('books.fields.genre', 'Genre')}
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8} md={6}>
              <Form.Item
                name="publication_year"
                label={t('books.fields.publicationYear', 'Publication Year')}
              >
                <Select
                  placeholder={t('books.fields.publicationYear', 'Publication Year')}
                  allowClear
                >
                  {publicationYears.map((year) => (
                    <Option key={year} value={year}>
                      {year}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button htmlType="submit" type="primary" icon={<SearchOutlined />}>
                {t('buttons.search', 'Search')}
              </Button>
              <Button onClick={handleClearFilters} className="ml-2" icon={<UndoOutlined />}>
                {t('buttons.clearFilters', 'Reset')}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>

      <Table
        {...tableProps}
        columns={columns}
        rowKey="id"
        onRow={(record) => ({
          onClick: () => handleBookSelection(record),
          className: selectedBookId === record.id ? 'bg-blue-50 hover:bg-blue-100' : '',
        })}
        rowClassName={() => 'cursor-pointer'}
      />
    </div>
  );
};
