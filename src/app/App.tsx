import React from 'react';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/theme/lib/useTheme';
import { classNames } from '@/shared/lib';
import { Navbar } from '@/widgets/Navbar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
