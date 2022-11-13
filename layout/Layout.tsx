import React from 'react';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';
import { Header, Sidebar, RightBar } from '@/components/Layout';

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.wrapper}>
    <header>
      <Header />
    </header>
    <main>
      <Sidebar className={styles.sidebar} />
      <div className={styles.content}>
        {children}
      </div>
      <RightBar className={styles.rightBar} />
    </main>
  </div>
);
