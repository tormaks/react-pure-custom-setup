/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { memo, ReactNode } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames';
import classes from './Link.module.scss';

export enum LinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface LinkProps extends RouterLinkProps {
  className?: string;
  theme?: LinkTheme;
  children?: ReactNode;
}

export const Link = memo((props: LinkProps) => {
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
      className={classNames(classes.component, {}, [className as string, classes[theme]])}
    >
      {children}
    </RouterLink>
  );
});
