import React from 'react';

import { Theme, useTheme } from '@/app/providers/theme';
import DarkThemeIcon from '@/shared/assets/icons/darkThemeIcon.svg';
import LightThemeIcon from '@/shared/assets/icons/lightThemeIcon.svg';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, [className as string])}
    >
      {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
    </Button>
  );
};
