import { Descriptions, Tag, Divider, Typography, Card } from 'antd';
import { useTranslation, useOne } from '@refinedev/core';
import { formatDate } from '@utils/format';
import { Borrowing } from '@models/borrowing';
import { Book } from '@models/book';
import { Member } from '@models/member';
import { useEffect, useState } from 'react';

const { Title, Text } = Typography;

interface BorrowingShowComponentProps {
  record?: Borrowing;
}

export default function BorrowingShowComponent({ record }: BorrowingShowComponentProps) {
  const { translate: t } = useTranslation();
  const [bookData, setBookData] = useState<Book | null>(null);
  const [memberData, setMemberData] = useState<Member | null>(null);

  const { data: bookResult, isLoading: isLoadingBook } = useOne<Book>({
    resource: 'books',
    id: record?.book_id || '',
    queryOptions: {
      enabled: !!record?.book_id,
    },
  });

  const { data: memberResult, isLoading: isLoadingMember } = useOne<Member>({
    resource: 'members',
    id: record?.member_id || '',
    queryOptions: {
      enabled: !!record?.member_id,
    },
  });

  useEffect(() => {
    if (bookResult?.data) {
      setBookData(bookResult.data);
    }
  }, [bookResult]);

  useEffect(() => {
    if (memberResult?.data) {
      setMemberData(memberResult.data);
    }
  }, [memberResult]);

  const getStatusBadge = (status?: string) => {
    if (!status) return null;

    const statusColors: Record<string, string> = {
      borrowed: 'blue',
      returned: 'green',
      overdue: 'red',
      lost: 'black',
    };

    return (
      <Tag color={statusColors[status] || 'default'}>
        {t(`borrowing.form.statusOptions.${status}`, status)}
      </Tag>
    );
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <div>
            <Title level={3} className="m-0">
              {t('borrowing.show.borrowingDetails', 'Borrowing Details')}
            </Title>
            <div className="mt-2">{getStatusBadge(record?.status)}</div>
          </div>
        </div>

        <Divider />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title={t('borrowing.show.bookInfo', 'Book Information')}
            size="small"
            className="shadow-none border"
          >
            {isLoadingBook ? (
              <div className="animate-pulse h-20" />
            ) : bookData ? (
              <>
                <Title level={5} className="m-0 mb-2">
                  {bookData.title}
                </Title>
                <Text type="secondary" className="block mb-1">
                  {t('book.form.author', 'Author')}: {bookData.author}
                </Text>
                <Text type="secondary" className="block">
                  {t('book.form.isbn', 'ISBN')}: {bookData.isbn}
                </Text>
              </>
            ) : (
              <Text type="secondary">{t('common.notAvailable', 'N/A')}</Text>
            )}
          </Card>

          <Card
            title={t('borrowing.show.memberInfo', 'Member Information')}
            size="small"
            className="shadow-none border"
          >
            {isLoadingMember ? (
              <div className="animate-pulse h-20" />
            ) : memberData ? (
              <>
                <Title level={5} className="m-0 mb-2">
                  {memberData.first_name} {memberData.last_name}
                </Title>
                <Text type="secondary" className="block mb-1">
                  {t('member.form.email', 'Email')}: {memberData.email}
                </Text>
                <Text type="secondary" className="block">
                  {t('member.form.phoneNumber', 'Phone')}: {memberData.phone_number}
                </Text>
              </>
            ) : (
              <Text type="secondary">{t('common.notAvailable', 'N/A')}</Text>
            )}
          </Card>
        </div>

        <Divider orientation="left">{t('borrowing.show.dates', 'Dates')}</Divider>

        <Descriptions bordered layout="vertical" size="middle">
          <Descriptions.Item label={t('borrowing.form.borrowDate', 'Borrow Date')}>
            {record?.borrow_date ? formatDate(record.borrow_date) : t('common.notAvailable', 'N/A')}
          </Descriptions.Item>

          <Descriptions.Item label={t('borrowing.form.returnDate', 'Return Date')}>
            {record?.return_date ? formatDate(record.return_date) : t('common.notAvailable', 'N/A')}
          </Descriptions.Item>
        </Descriptions>

        {record?.notes && (
          <>
            <Divider orientation="left">{t('borrowing.show.notes', 'Notes')}</Divider>
            <div className="bg-gray-50 p-4 rounded-md">{record.notes}</div>
          </>
        )}

        <Divider orientation="left">{t('common.systemInfo', 'Additional Information')}</Divider>

        <Descriptions bordered layout="vertical" size="small">
          <Descriptions.Item label={t('common.createdAt', 'Borrowing Data Created At')}>
            {record?.created_at ? formatDate(record.created_at) : t('common.notAvailable', 'N/A')}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
}
