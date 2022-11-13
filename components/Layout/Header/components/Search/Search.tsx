import React from 'react';
import cn from 'classnames';
import { Icon16SearchOutline } from '@vkontakte/icons';
import { Input } from '@/components/UI';

import styles from './Search.module.scss';
import { SearchProps } from './Search.props';

export const Search = ({ className }: SearchProps) => (
  <div className={cn(styles.search, className)}>
    <Input placeholder="Поиск" />
    <Icon16SearchOutline className={styles.icon} />
  </div>
);
