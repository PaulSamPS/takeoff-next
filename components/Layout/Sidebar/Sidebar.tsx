import React from 'react';
import cn from 'classnames';
import {
  Icon20MessageOutline, Icon20NewsfeedOutline, Icon20UsersOutline, Icon28Profile,
} from '@vkontakte/icons';
import Link from 'next/link';
import { SidebarProps } from './Sidebar.props';

import styles from './Sidebar.module.scss';

export const Sidebar = ({ className }: SidebarProps) => (
  <div className={cn(styles.wrapper, className)}>
    <Link
      href="#"
      style={{ padding: '0' }}
    >
      <Icon28Profile className={styles.icon} />
      Моя страница
    </Link>
    <Link href="#" style={{ padding: '0' }}>
      <Icon20NewsfeedOutline className={styles.icon} />
      Новости
    </Link>
    <Link href="#" style={{ padding: '0' }}>
      <Icon20MessageOutline className={styles.icon} />
      Сообщения
    </Link>
    <Link href="#" style={{ padding: '0' }}>
      <Icon20UsersOutline className={styles.icon} />
      Друзья
    </Link>
  </div>
);
