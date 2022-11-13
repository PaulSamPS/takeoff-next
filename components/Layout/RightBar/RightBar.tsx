import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { RightBarProps } from './RightBar.props';

import styles from './RightBar.module.scss';

export const RightBar = ({
  className,
}: RightBarProps): JSX.Element => (
  <div
    className={cn(styles.wrapper, className)}
  >
    <Link href="#">
      Все посты
    </Link>
    <Link href="#">
      Мои посты
    </Link>
  </div>
);
