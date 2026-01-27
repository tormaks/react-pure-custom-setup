import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import { StateSchema, StoreProvider } from '@/app/providers/storeProvider';
import i18nForTests from '@/shared/config/i18n/i18nForTests';

export interface MemoryRouterOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const renderComponent = (component: ReactNode, options: MemoryRouterOptions = {}) => {
  const { route = '/', initialState } = options;

  render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
};
