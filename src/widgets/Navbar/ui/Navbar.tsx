import React, { FC } from 'react';

import { classNames } from '@/shared/lib/classNames';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(classes.component, {}, [className as string])}>
    <div className={classes.links}>
      /
    </div>
  </div>
);
