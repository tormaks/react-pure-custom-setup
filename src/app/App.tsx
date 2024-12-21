import React, { Suspense } from 'react';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { classNames } from '@/shared/lib/classNames';
import { Loader } from '@/shared/ui/Loader';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/theme';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme as string])}>
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
