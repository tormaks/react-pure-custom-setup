import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Link, LinkTheme } from '@/shared/ui/Link';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.component, {}, [className as string])}>
      <div className={cls.links}>
        <Link theme={LinkTheme.SECONDARY} to="/">{t('Главная')}</Link>
        <Link theme={LinkTheme.SECONDARY} to="/about">{t('О сайте')}</Link>
      </div>
    </div>
  );
};
