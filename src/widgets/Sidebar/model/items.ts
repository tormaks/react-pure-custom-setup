import React from 'react';

import AboutIcon from '@/shared/assets/icons/aboutIcon.svg';
import MainIcon from '@/shared/assets/icons/mainIcon.svg';
import ProfileIcon from '@/shared/assets/icons/profileIcon.svg';
import { RoutePath } from '@/shared/config/routerConfig';

export interface ISidebarItem {
  text: string;
  path: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const sidebarItems: ISidebarItem[] = [
  {
    text: 'Главная',
    path: RoutePath.main,
    Icon: MainIcon,
  },
  {
    text: 'О сайте',
    path: RoutePath.about,
    Icon: AboutIcon,
  },
  {
    text: 'Профиль',
    path: RoutePath.profile,
    Icon: ProfileIcon,
  },
];
