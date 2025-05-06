import MemberForm from '@modules/member/components/form/MemberForm';
import { useMemberForm } from '@modules/member/hooks/useMemberForm';
import { Create } from '@refinedev/antd';

export default function MemberCreateContainer() {
  const { form } = useMemberForm({
    useFormOptions: {
      action: 'create',
    },
  });

  return (
    <Create saveButtonProps={form.saveButtonProps}>
      <MemberForm formProps={form.formProps} />
    </Create>
  );
}
