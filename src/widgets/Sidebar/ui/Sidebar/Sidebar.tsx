import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import AboutIcon from '@/shared/assets/icons/aboutIcon.svg';
import MainIcon from '@/shared/assets/icons/mainIcon.svg';
import { RoutePath } from '@/shared/config/routerConfig';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Link, LinkTheme } from '@/shared/ui/Link';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.component, { [classes.collapsed]: collapsed }, [className as string])}
    >
      <Button
        square
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={classes.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size="L"
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={classes.items}>
        <Link
          className={classes.item}
          theme={LinkTheme.SECONDARY}
          to={RoutePath.main}
        >
          <MainIcon className={classes.icon} />
          <span className={classes.link}>{t('Главная')}</span>
        </Link>
        <Link
          className={classes.item}
          theme={LinkTheme.SECONDARY}
          to={RoutePath.about}
        >
          <AboutIcon className={classes.icon} />
          <span className={classes.link}>{t('О сайте')}</span>
        </Link>
      </div>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
