import ErrorPage from '@components/error-page';
import { ListProps, List } from '@refinedev/antd';
import { CanAccess } from '@refinedev/core';
import { useResource } from '@refinedev/core';
import { Card } from 'antd';

export interface BaseListPageProps extends ListProps {
  children: React.ReactNode;
  action?: string;
}

export default function BaseListPage({ children, action, ...listProps }: BaseListPageProps) {
  const { resource } = useResource();
  return (
    <CanAccess
      resource={resource?.name}
      action={action || 'list'}
      fallback={<ErrorPage statusCode={403} />}
    >
      <Card>
        <List {...listProps}>{children}</List>
      </Card>
    </CanAccess>
  );
}
