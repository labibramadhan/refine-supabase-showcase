import { Form, Input, Select, Row, Col } from 'antd';
import { useTranslate } from '@refinedev/core';
import type { FormProps } from 'antd';
import { useGenreSelect } from '@modules/genre/hooks/useGenreSelect';

export type BookFormProps = {
  formProps?: FormProps;
};

export default function BookForm({ formProps }: BookFormProps) {
  const t = useTranslate();

  const { selectProps: genreSelectProps } = useGenreSelect({});

  return (
    <Form layout="vertical" {...formProps} className="w-full mx-auto">
      <Row gutter={[24, 16]}>
        <Col xs={24}>
          <Form.Item
            name="title"
            label={t('book.form.title', 'Title')}
            rules={[
              {
                required: true,
                message: t('book.form.validation.titleRequired', 'Please enter book title'),
              },
            ]}
          >
            <Input
              placeholder={t('book.form.titlePlaceholder', 'Enter book title')}
              className="rounded-md"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            name="author"
            label={t('book.form.author', 'Author')}
            rules={[
              {
                required: true,
                message: t('book.form.validation.authorRequired', 'Please enter author name'),
              },
            ]}
          >
            <Input
              placeholder={t('book.form.authorPlaceholder', 'Enter author name')}
              className="rounded-md"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            name="isbn"
            label={t('book.form.isbn', 'ISBN')}
            rules={[
              {
                required: true,
                message: t('book.form.validation.isbnRequired', 'Please enter ISBN'),
              },
            ]}
          >
            <Input
              placeholder={t('book.form.isbnPlaceholder', 'Enter ISBN')}
              className="rounded-md"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            name="publication_year"
            label={t('book.form.publicationYear', 'Publication Year')}
            rules={[
              {
                required: true,
                message: t('book.form.validation.yearRequired', 'Please enter publication year'),
              },
            ]}
          >
            <Input
              placeholder={t('book.form.yearPlaceholder', 'Enter publication year')}
              className="rounded-md"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            name="genre_id"
            label={t('book.form.genre', 'Genre')}
            rules={[
              {
                required: true,
                message: t('book.form.validation.genreRequired', 'Please select a genre'),
              },
            ]}
          >
            <Select
              {...genreSelectProps}
              placeholder={t('book.form.genrePlaceholder', 'Select genre')}
              className="w-full rounded-md"
            />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item name="description" label={t('book.form.description', 'Description')}>
            <Input.TextArea
              rows={4}
              placeholder={t('book.form.descriptionPlaceholder', 'Enter book description')}
              className="rounded-md"
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
