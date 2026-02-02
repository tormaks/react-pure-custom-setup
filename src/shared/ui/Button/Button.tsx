/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { ButtonHTMLAttributes } from 'react';

import { classNames } from '@/shared/lib/classNames';
import classes from './Button.module.scss';

type ButtonTheme = 'clear' | 'clearInverted' | 'outline' | 'background' | 'backgroundInverted';

type ButtonSize = 'M' | 'L' | 'XL';

export enum EButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = 'M',
    disabled = false,
    ...otherProps
  } = props;

  const mods: Record<string, boolean | undefined> = {
    [classes.square]: square,
    [classes.disabled]: disabled,
  };

  return (
    <button
      {...otherProps}
      type="button"
      disabled={disabled}
      className={classNames(
        classes.component,
        mods,
        [
          className as string,
          classes[theme as ButtonTheme],
          classes[EButtonSize[size as ButtonSize]],
        ],
      )}
    >
      {children}
    </button>
  );
};
