import React from 'react';

import { Theme, useTheme } from '@/app/providers/theme';
import DarkThemeIcon from '@/shared/assets/icons/darkThemeIcon.svg';
import LightThemeIcon from '@/shared/assets/icons/lightThemeIcon.svg';
import { classNames } from '@/shared/lib/classNames';
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
      className={classNames('', {}, [className])}
    >
      {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
    </AppButton>
  );
};
