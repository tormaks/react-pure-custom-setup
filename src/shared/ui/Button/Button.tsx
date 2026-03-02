/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames';
import classes from './Button.module.scss';

type ButtonTheme = 'clear'
  | 'clearInverted'
  | 'outline'
  | 'outlineInverted'
  | 'outline_red'
  | 'background'
  | 'backgroundInverted';

type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = 'outline',
    square,
    size = 'small',
    disabled = false,
    ...otherProps
  } = props;

  const mods: Mods = {
    [classes[theme]]: theme,
    [classes.square]: square,
    [classes.disabled]: disabled,
    [classes[size]]: true,
  };

  return (
    <button
      {...otherProps}
      type="button"
      disabled={disabled}
      className={classNames(classes.component, mods, [className])}
    >
      {children}
    </button>
  );
});
