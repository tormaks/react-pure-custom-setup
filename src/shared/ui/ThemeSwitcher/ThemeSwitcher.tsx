import React from 'react';

import { classNames } from '@/shared/lib/classNames';
import cls from './ThemeSwitcher.module.scss';
import { ThemeModel, useTheme } from '@/app/providers/theme';
import LightThemeIcon from '../../assets/icons/lightThemeIcon.svg';
import DarkThemeIcon from '../../assets/icons/darkThemeIcon.svg';
import { AppButton, ThemeAppButton } from '@/shared/ui/AppButton';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      theme={ThemeAppButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === ThemeModel.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
    </AppButton>
  );
};
