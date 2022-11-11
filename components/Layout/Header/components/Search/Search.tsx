import React from 'react';
import cn from 'classnames';
import { Input } from '@/components/UI';
import { SearchIcon } from '@/helpers/icons';

import styles from './Search.module.scss';
import { SearchProps } from './Search.props';

export const Search = ({ className }: SearchProps) => (
  <div className={cn(styles.search, className)}>
    <Input placeholder="Поиск" />
    <SearchIcon />
  </div>
);
