import ErrorPage from '@components/error-page';
import { ShowProps, Show } from '@refinedev/antd';
import { CanAccess } from '@refinedev/core';
import { useResource } from '@refinedev/core';

export interface BaseShowPageProps extends ShowProps {
  children: React.ReactNode;
  action?: string;
}

export default function BaseShowPage({ children, action, ...showProps }: BaseShowPageProps) {
  const { resource } = useResource();
  return (
    <CanAccess
      resource={resource?.name}
      action={action || 'edit'}
      fallback={<ErrorPage statusCode={403} />}
    >
      <Show {...showProps}>{children}</Show>
    </CanAccess>
  );
}
