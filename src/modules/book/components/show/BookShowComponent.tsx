import { Descriptions, Divider, Typography } from 'antd';
import { useTranslate } from '@refinedev/core';
import { formatDate } from '@utils/format';
import { Book } from '@models/book';

const { Title } = Typography;

interface BookShowComponentProps {
  record?: Book;
}

export default function BookShowComponent({ record }: BookShowComponentProps) {
  const t = useTranslate();

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
        <div className="flex-grow">
          <Title level={3} className="m-0">
            {record?.title}
          </Title>
          <div className="text-lg text-gray-600 mb-2">
            {t('book.show.byAuthor', 'by')} {record?.author}
          </div>
          <div className="mt-2">{record?.genre?.name}</div>
        </div>
      </div>

      <Divider orientation="left">{t('book.show.bookDetails', 'Book Details')}</Divider>

      <Descriptions bordered layout="vertical" size="middle">
        <Descriptions.Item label={t('book.form.isbn', 'ISBN')}>{record?.isbn}</Descriptions.Item>

        <Descriptions.Item label={t('book.form.publicationYear', 'Publication Year')}>
          {record?.publication_year}
        </Descriptions.Item>

        <Descriptions.Item label={t('book.form.genre', 'Genre')}>
          {record?.genre?.name}
        </Descriptions.Item>
      </Descriptions>

      {record?.description && (
        <>
          <Divider orientation="left">{t('book.show.description', 'Description')}</Divider>
          <div className="bg-gray-50 p-4 rounded-md whitespace-pre-line">{record.description}</div>
        </>
      )}

      <Divider orientation="left">{t('book.show.systemDetails', 'System Details')}</Divider>

      <Descriptions bordered layout="vertical" size="middle">
        <Descriptions.Item label={t('common.createdAt', 'Created At')}>
          {record?.created_at ? formatDate(record.created_at) : t('common.notAvailable', 'N/A')}
        </Descriptions.Item>

        <Descriptions.Item label={t('common.updatedAt', 'Updated At')}>
          {record?.updated_at ? formatDate(record.updated_at) : t('common.notAvailable', 'N/A')}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
}
