import React, { FunctionComponent } from 'react';
import { AppContextProvider, IAppContext } from '@/context';
import { Layout } from '@/layout';

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>,
) => function withLayoutComponent(props: T) {
    return (
      <AppContextProvider user={props.user}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
