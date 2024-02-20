import { createContext } from 'react';

import { ThemeContextProps, ThemeModel } from '../model/theme.model';

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeModel || ThemeModel.LIGHT;
