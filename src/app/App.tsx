import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { useTheme } from './providers/theme/lib/useTheme';
import { classNames } from '@/shared';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <button onClick={toggleTheme}>
        TOGGLE
      </button>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Main</Link>
      <Suspense fallback={<div>...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />}/>
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
