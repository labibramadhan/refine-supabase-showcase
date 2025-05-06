import { Show } from '@refinedev/antd';
import { useTranslation } from '@refinedev/core';
import { useParams } from 'next/navigation';
import MemberShowComponent from '@modules/member/components/show/MemberShowComponent';
import { useMemberShow } from '@modules/member/hooks/useMemberShow';

export default function MemberShowContainer() {
  const { translate: t } = useTranslation();
  const params = useParams();
  const id = params?.id as string;
  const { data, isLoading } = useMemberShow(id);

  return (
    <Show
      isLoading={isLoading}
      title={t('member.titles.show', 'Member Details')}
      canEdit
      resource="members"
    >
      <MemberShowComponent record={data?.data} />
    </Show>
  );
}
