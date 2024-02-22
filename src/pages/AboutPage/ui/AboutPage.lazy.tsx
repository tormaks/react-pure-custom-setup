import { lazy } from 'react';

export const AboutPageLazy = lazy(() => new Promise((resolve) => {
  // TODO: Для тестирования лоудера, потом удалить
  // @ts-ignore
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
