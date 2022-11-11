import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import styles from './Header.module.scss';

import { HeaderProps } from '@/components/Layout/Header/Header.props';
import { Logo } from '@/components/UI/Logo/Logo';
import { Search } from './components';

export const Header = ({ className }: HeaderProps) => (
  <div className={cn(styles.wrapper, className)}>
    <Link href="/" className={styles.logo}>
      <Logo />
    </Link>
    <Search className={styles.search} />
  </div>
);
