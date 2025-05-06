import MemberForm from '@modules/member/components/form/MemberForm';
import { useMemberForm } from '@modules/member/hooks/useMemberForm';
import BaseEditPage from '@components/base-pages/edit/BaseEditPage';
import { useTranslate } from '@refinedev/core';
import { useParams } from 'next/navigation';

export default function MemberEditContainer() {
  const t = useTranslate();
  const params = useParams();
  const id = params?.id as string;
  const { form } = useMemberForm({
    useFormOptions: {
      id,
      action: 'edit',
    },
  });

  return (
    <BaseEditPage
      isLoading={form.formLoading}
      saveButtonProps={form.saveButtonProps}
      title={t('member.titles.edit', 'Edit Member')}
    >
      <MemberForm formProps={form.formProps} />
    </BaseEditPage>
  );
}
