/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { ButtonHTMLAttributes } from 'react';

import { classNames } from '@/shared/lib/classNames';
import cls from './AppButton.module.scss';

export enum ThemeAppButton {
  CLEAR = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ThemeAppButton;
}

export const AppButton: React.FC<AppButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      type="button"
      className={classNames(cls.component, {}, [cls[theme]])}
    >
      {children}
    </button>
  );
};
