'use client';

import { authProviderClient } from '@providers/auth-provider/auth-provider.client';
import { AccessControlProvider } from '@refinedev/core';
import { get } from 'lodash';

export const accessControlProvider: AccessControlProvider = {
  options: {
    buttons: {
      enableAccessControl: true,
      hideIfUnauthorized: true,
    },
    queryOptions: {
      staleTime: 5 * 60 * 1000,
    },
  },
  can: async ({ resource, action, params }) => {
    if (!resource) {
      return {
        can: true,
      };
    }
    if (params?.resource?.meta?.bypassAccess) {
      return {
        can: true,
      };
    }

    const permissions = (await authProviderClient.getPermissions?.()) as any;
    if (!permissions) {
      return {
        can: false,
        error: new Error('No permissions found'),
      };
    }

    const allowed = get(permissions, `${resource}.${action}`) == true;

    if (!allowed) {
      console.log(`not allowed to access ${resource} ${action}`);
    }

    return {
      can: allowed,
    };
  },
};
