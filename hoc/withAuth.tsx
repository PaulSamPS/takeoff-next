import React, { FunctionComponent } from 'react';
import { IAppContext } from '@/context';

export const withAuth = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>,
) => (props: T) => {
    const { user, isLoading } = useAppSelector((state) => state.auth);

    if (!user) {
      return <Page401 />;
    }

    if (isLoading) {
      return <Spinner />;
    }

    return <Component {...props} />;
  };
