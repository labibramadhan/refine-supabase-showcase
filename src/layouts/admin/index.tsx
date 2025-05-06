import { redirect } from 'next/navigation';
import { authProviderServer } from '@providers/auth-provider/auth-provider.server';
import { ThemedLayoutV2 } from './layout';

export async function AdminLayout({ children }: { children: React.ReactNode }) {
  const data = await getData();

  if (!data.authenticated) {
    return redirect(data?.redirectTo!);
  }

  return (
    <section>
      <ThemedLayoutV2>{children}</ThemedLayoutV2>
    </section>
  );
}

async function getData() {
  const { authenticated, redirectTo } = await authProviderServer.check();

  return {
    authenticated,
    redirectTo,
  };
}
