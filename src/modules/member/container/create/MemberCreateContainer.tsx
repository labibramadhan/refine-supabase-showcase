import MemberForm from '@modules/member/components/form/MemberForm';
import { useMemberForm } from '@modules/member/hooks/useMemberForm';
import BaseCreatePage from '@components/base-pages/create/BaseCreatePage';

export default function MemberCreateContainer() {
  const { form } = useMemberForm({
    useFormOptions: {
      action: 'create',
    },
  });

  return (
    <BaseCreatePage saveButtonProps={form.saveButtonProps}>
      <MemberForm formProps={form.formProps} />
    </BaseCreatePage>
  );
}
