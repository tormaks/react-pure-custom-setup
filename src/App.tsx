import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { useTheme } from './theme/useTheme';
import { classNames } from './utils/classNames/classNames';

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
          <Route path={'/about'} element={<AboutPageLazy />}/>
          <Route path={'/'} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
