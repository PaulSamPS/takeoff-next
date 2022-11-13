import React from 'react';

import cn from 'classnames';

import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './CustomLink.module.scss';
import { CustomLinkProps } from './CustomLink.props';

export const CustomLink = ({
  appearance,
  children,
  className,
  to,
  ...props
}: CustomLinkProps): JSX.Element => {
  const router = useRouter();
  const match = router.query.post === to.pathname;
  console.log(`${router.query.post}=${router.query}`);

  return (
    <Link
      href={to}
      className={cn(
        appearance === 'rightMenu' && match ? styles.activeRightBar : styles.link,
        className,
        {
          [styles.active]: match,
          [styles.rightMenu]: appearance === 'rightMenu',
        },
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
