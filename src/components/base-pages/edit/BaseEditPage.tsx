import ErrorPage from '@components/error-page';
import { EditProps, Edit } from '@refinedev/antd';
import { CanAccess } from '@refinedev/core';
import { useResource } from '@refinedev/core';

export interface BaseEditPageProps extends EditProps {
  children: React.ReactNode;
  action?: string;
}

export default function BaseEditPage({ children, action, ...editProps }: BaseEditPageProps) {
  const { resource } = useResource();
  return (
    <CanAccess
      resource={resource?.name}
      action={action || 'edit'}
      fallback={<ErrorPage statusCode={403} />}
    >
      <Edit {...editProps}>{children}</Edit>
    </CanAccess>
  );
}
