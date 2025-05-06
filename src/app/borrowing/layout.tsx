import { AdminLayout } from '@layouts/admin';
import React from 'react';

export default async function Layout({ children }: React.PropsWithChildren) {
  return <AdminLayout>{children}</AdminLayout>;
}
