import MemberForm from '@modules/member/components/form/MemberForm';
import { useMemberForm } from '@modules/member/hooks/useMemberForm';
import { Edit } from '@refinedev/antd';
import { useTranslation } from '@refinedev/core';
import { useParams } from 'next/navigation';

export default function MemberEditContainer() {
  const { translate: t } = useTranslation();
  const params = useParams();
  const id = params?.id as string;
  const { form } = useMemberForm({
    useFormOptions: {
      id,
      action: 'edit',
    },
  });

  return (
    <Edit
      isLoading={form.formLoading}
      saveButtonProps={form.saveButtonProps}
      title={t('member.titles.edit', 'Edit Member')}
    >
      <MemberForm formProps={form.formProps} />
    </Edit>
  );
}
