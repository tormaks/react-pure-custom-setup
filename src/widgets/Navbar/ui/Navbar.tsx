import React, { FC } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/">Главная</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
    </div>
  </div>
);
