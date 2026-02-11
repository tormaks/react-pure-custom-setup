import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Link, LinkTheme } from '@/shared/ui/Link';
import { ISidebarItem } from '../../model';
import classes from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: ISidebarItem;
  collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props;

  const { t } = useTranslation();

  return (
    <Link
      className={classNames(classes.component, { [classes.collapsed]: collapsed })}
      theme={LinkTheme.SECONDARY}
      to={item.path}
    >
      <item.Icon className={classes.icon} />
      <span className={classes.link}>{t(item.text)}</span>
    </Link>
  );
});
