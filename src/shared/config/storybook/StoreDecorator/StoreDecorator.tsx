import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/storeProvider';

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
  <StoreProvider initialState={initialState}>
    <StoryComponent />
  </StoreProvider>
);
