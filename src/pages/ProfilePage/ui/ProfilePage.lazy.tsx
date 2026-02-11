import { lazy } from 'react';

export const ProfilePageLazy = lazy(() => new Promise((resolve) => {
  // TODO: Для тестирования лоудера, потом удалить
  // @ts-ignore
  setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
