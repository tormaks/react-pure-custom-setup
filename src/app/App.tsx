import React, { Suspense } from 'react';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Loader } from '@/shared/ui/Loader';
import { AppRouter } from './providers/router';

export const App = () => (
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
