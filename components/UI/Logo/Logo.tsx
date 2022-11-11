import React from 'react';
import cn from 'classnames';
import styles from './Logo.module.scss';
import { LogoProps } from './Logo.props';

export const Logo = ({ className }: LogoProps) => (
  <div className={cn(styles.wrapper, className)}>
    <div className={styles.logo}>T</div>
    <h1>Takeoff</h1>
  </div>
);
