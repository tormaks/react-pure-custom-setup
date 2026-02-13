import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@/app/App';
import { ErrorBoundary } from '@/app/providers/errorBoundary';
import { StoreProvider } from '@/app/providers/storeProvider/';
import { ThemeProvider } from '@/app/providers/theme';
import 'app/styles/index.scss';
import '@/shared/config/i18n';

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
