import { Descriptions, Tag, Divider, Typography } from 'antd';
import { useTranslation } from '@refinedev/core';
import { formatDate } from '@utils/format';
import { Member } from '@models/member';

const { Title } = Typography;

interface MemberShowComponentProps {
  record?: Member;
}

export default function MemberShowComponent({ record }: MemberShowComponentProps) {
  const { translate: t } = useTranslation();

  const getStatusTag = (status?: string) => {
    if (!status) return null;

    const statusColors: Record<string, string> = {
      active: 'green',
      inactive: 'red',
      pending: 'orange',
    };

    return (
      <Tag color={statusColors[status] || 'default'}>
        {t(`member.statusOptions.${status}`, status)}
      </Tag>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
        <div className="flex-grow">
          <Title level={3} className="m-0">
            {record?.first_name} {record?.last_name}
          </Title>
          <div className="mt-2">{getStatusTag(record?.status)}</div>
        </div>
      </div>

      <Divider orientation="left">{t('member.show.personalDetails', 'Personal Details')}</Divider>

      <Descriptions bordered layout="vertical" size="middle">
        <Descriptions.Item label={t('member.form.email', 'Email')}>
          {record?.email}
        </Descriptions.Item>

        <Descriptions.Item label={t('member.form.phoneNumber', 'Phone Number')}>
          {record?.phone_number}
        </Descriptions.Item>

        <Descriptions.Item label={t('member.form.address', 'Address')} span={2}>
          {record?.address || t('common.notProvided', 'Not provided')}
        </Descriptions.Item>
      </Descriptions>

      <Divider orientation="left">
        {t('member.show.membershipDetails', 'Membership Details')}
      </Divider>

      <Descriptions bordered layout="vertical" size="middle">
        <Descriptions.Item label={t('member.form.membershipStartDate', 'Membership Start Date')}>
          {record?.membership_start_date
            ? formatDate(record.membership_start_date)
            : t('common.notAvailable', 'N/A')}
        </Descriptions.Item>

        <Descriptions.Item label={t('member.form.membershipEndDate', 'Membership End Date')}>
          {record?.membership_end_date
            ? formatDate(record.membership_end_date)
            : t('common.notAvailable', 'N/A')}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}
