import BaseShowPage from '@components/base-pages/show/BaseShowPage';
import { useParams } from 'next/navigation';
import MemberShowComponent from '@modules/member/components/show/MemberShowComponent';
import { useMemberShow } from '@modules/member/hooks/useMemberShow';
import { useTranslate } from '@refinedev/core';

export default function MemberShowContainer() {
  const t = useTranslate();
  const params = useParams();
  const id = params?.id as string;
  const { data, isLoading } = useMemberShow(id);

  return (
    <BaseShowPage
      isLoading={isLoading}
      title={t('member.titles.show', 'Member Details')}
      canEdit
      resource="members"
    >
      <MemberShowComponent record={data?.data} />
    </BaseShowPage>
  );
}
