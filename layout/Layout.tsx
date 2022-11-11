import React from 'react';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';
import { Header } from '@/components/Layout';

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.wrapper}>
    <header><Header /></header>
    <main>{children}</main>
  </div>
);
