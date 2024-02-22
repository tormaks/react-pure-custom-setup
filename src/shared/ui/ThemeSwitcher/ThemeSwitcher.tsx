import React from 'react';

import { ThemeModel, useTheme } from '@/app/providers/theme';
import { classNames } from '@/shared/lib/classNames';
import { AppButton, ThemeAppButton } from '@/shared/ui/AppButton';
import DarkThemeIcon from '../../assets/icons/darkThemeIcon.svg';
import LightThemeIcon from '../../assets/icons/lightThemeIcon.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      theme={ThemeAppButton.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      {theme === ThemeModel.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
    </AppButton>
  );
};
