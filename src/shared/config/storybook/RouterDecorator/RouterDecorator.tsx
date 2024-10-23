import { BrowserRouter } from 'react-router-dom';
import { Story } from '@storybook/react';

import '@/app/styles/index.scss';

export const RouterDecorator = (StoryComponent: Story) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);
