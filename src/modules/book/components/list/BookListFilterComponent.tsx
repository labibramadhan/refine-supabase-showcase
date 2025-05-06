import { useTranslation } from '@refinedev/core';
import { Form, Input, Select, Button, Card, Row, Col } from 'antd';
import { SearchOutlined, UndoOutlined } from '@ant-design/icons';
import { useGenreSelect } from '@modules/genre/hooks/useGenreSelect';

interface BookListFilterComponentProps {
  formProps: any;
}

export default function BookListFilterComponent({ formProps }: BookListFilterComponentProps) {
  const { translate: t } = useTranslation();

  const { selectProps: genreSelectProps } = useGenreSelect({});

  return (
    <Card className="mb-4">
      <Form layout="vertical" {...formProps} className="mb-0">
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="title" label={t('book.filter.title', 'Title')}>
              <Input
                placeholder={t('book.filter.titlePlaceholder', 'Search by title')}
                prefix={<SearchOutlined />}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="author" label={t('book.filter.author', 'Author')}>
              <Input
                placeholder={t('book.filter.authorPlaceholder', 'Search by author')}
                prefix={<SearchOutlined />}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="isbn" label={t('book.filter.isbn', 'ISBN')}>
              <Input
                placeholder={t('book.filter.isbnPlaceholder', 'Search by ISBN')}
                prefix={<SearchOutlined />}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="genre_id" label={t('book.filter.genre', 'Genre')}>
              <Select
                {...genreSelectProps}
                placeholder={t('book.filter.genrePlaceholder', 'Select genre')}
                allowClear
              />
            </Form.Item>
          </Col>
          <Col xs={24} className="flex justify-end">
            <Row gutter={8}>
              <Col>
                <Button type="primary" htmlType="submit" className="mr-2" icon={<SearchOutlined />}>
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
