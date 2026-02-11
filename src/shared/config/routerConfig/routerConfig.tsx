/* eslint-disable no-unused-vars */
import { RouteProps } from 'react-router-dom';

import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
  PROFILE = 'profile'
}

export const RoutePath: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about',
  [Routes.PROFILE]: '/profile',
  [Routes.NOT_FOUND]: '*',
};

export const routerConfig: Record<Routes, RouteProps> = {
  [Routes.MAIN]: {
    element: <MainPage />,
    path: RoutePath.main,
  },
  [Routes.ABOUT]: {
    element: <AboutPage />,
    path: RoutePath.about,
  },
  [Routes.PROFILE]: {
    element: <ProfilePage />,
    path: RoutePath.profile,
  },
  [Routes.NOT_FOUND]: {
    element: <NotFoundPage />,
    path: RoutePath.not_found,
  },
};
