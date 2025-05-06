import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@config/env';
import { createBrowserClient } from '@supabase/ssr';

export const supabaseBrowserClient = createBrowserClient(SUPABASE_URL!, SUPABASE_ANON_KEY!, {
  db: {
    schema: 'public',
  },
});
