import React, { FunctionComponent } from 'react';
import { IAppContext } from '@/context';
import { Login } from '../page-components/Login/Login';

export const withAuth = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>,
) => (props: T) => {
    const { user, isLoading } = useAppSelector((state) => state.auth);

    if (!user) {
      return <Login />;
    }

    return <Component {...props} />;
  };
