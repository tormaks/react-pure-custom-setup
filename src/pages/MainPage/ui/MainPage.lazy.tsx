import { lazy } from 'react';

export const MainPageLazy = lazy(() => new Promise((resolve) => {
  // TODO: Для тестирования лоудера, потом удалить
  // @ts-ignore
  setTimeout(() => resolve(import('./MainPage')), 1500);
}));
