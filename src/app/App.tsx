import React, { Suspense, useEffect } from 'react';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { classNames } from '@/shared/lib/classNames';
import { Loader } from '@/shared/ui/Loader';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/theme';
import './styles/index.scss';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={classNames('app', {})}>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
