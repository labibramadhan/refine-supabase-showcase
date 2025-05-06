import ErrorPage from '@components/error-page';
import { Create, CreateProps } from '@refinedev/antd';
import { CanAccess } from '@refinedev/core';
import { useResource } from '@refinedev/core';

export interface BaseCreatePageProps extends CreateProps {
  children: React.ReactNode;
  action?: string;
}

export default function BaseCreatePage({ children, action, ...createProps }: BaseCreatePageProps) {
  const { resource } = useResource();
  return (
    <CanAccess
      resource={resource?.name}
      action={action || 'create'}
      fallback={<ErrorPage statusCode={403} />}
    >
      <Create {...createProps}>{children}</Create>
    </CanAccess>
  );
}
