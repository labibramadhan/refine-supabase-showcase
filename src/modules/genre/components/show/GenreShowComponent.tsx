import { useTranslation } from '@refinedev/core';
import { Card, Typography, Descriptions, Divider } from 'antd';
import { Genre } from '@models/genre';
import { formatDate } from '@utils/format';

const { Title } = Typography;

export type GenreShowComponentProps = {
  record?: Genre;
  isLoading: boolean;
};

export function GenreShowComponent({ record, isLoading }: GenreShowComponentProps) {
  const { translate: t } = useTranslation();

  return (
    <div>
      <Card loading={isLoading}>
        <Title level={3}>{record?.name}</Title>

        <Divider orientation="left">{t('common.systemInfo', 'System Information')}</Divider>

        <Descriptions bordered layout="vertical" size="small">
          <Descriptions.Item label={t('common.createdAt', 'Created At')}>
            {record?.created_at ? formatDate(record.created_at) : t('common.notAvailable', 'N/A')}
          </Descriptions.Item>

          <Descriptions.Item label={t('common.updatedAt', 'Updated At')}>
            {record?.updated_at ? formatDate(record.updated_at) : t('common.notAvailable', 'N/A')}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
}
