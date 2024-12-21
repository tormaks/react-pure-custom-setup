import { Story } from '@storybook/react';

import { Theme, ThemeProvider } from '@/app/providers/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <body className={theme}>
      <div className="app">
        <StoryComponent />
      </div>
    </body>
  </ThemeProvider>
);
