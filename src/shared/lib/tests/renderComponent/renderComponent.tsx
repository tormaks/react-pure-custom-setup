import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
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
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
