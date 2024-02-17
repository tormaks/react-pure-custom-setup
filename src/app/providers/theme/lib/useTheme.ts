import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../constants/theme.constants';
import { UseTheme, ThemeModel } from '../model/theme.model';

export const useTheme = (): UseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === ThemeModel.LIGHT ? ThemeModel.DARK : ThemeModel.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return {
    theme,
    toggleTheme,
  }
};
