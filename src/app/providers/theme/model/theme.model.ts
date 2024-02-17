export enum ThemeModel {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme?: ThemeModel;
  setTheme?: (theme: ThemeModel) => void;
}

export interface UseTheme {
  theme: ThemeModel
  toggleTheme: () => void;
}
