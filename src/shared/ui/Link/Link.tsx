/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames';
import cls from './Link.module.scss';

export enum LinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface LinkProps extends RouterLinkProps {
  className?: string;
  theme?: LinkTheme;
}

export const Link: React.FC<LinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = LinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <RouterLink
      {...otherProps}
      to={to}
      className={classNames(cls.component, {}, [className as string, cls[theme]])}
    >
      {children}
    </RouterLink>
  );
};
