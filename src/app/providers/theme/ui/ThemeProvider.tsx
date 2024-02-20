import React, { FC, useMemo, useState } from 'react';

import { defaultTheme, ThemeContext } from '../constants/theme.constants';
import { ThemeModel } from '../model/theme.model';

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeModel>(defaultTheme);

  const defaultProviderValue = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProviderValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
