import React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/theme/lib/useTheme';
import { classNames } from '@/shared/lib';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <button onClick={toggleTheme}>
        TOGGLE
      </button>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Main</Link>
      <AppRouter />
    </div>
  );
};

export default App;
