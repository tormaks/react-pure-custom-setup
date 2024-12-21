import React, { Suspense, useEffect } from 'react';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Loader } from '@/shared/ui/Loader';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/theme';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('theme', theme as string);
  }, [theme]);

  return (
    <div className="app">
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
