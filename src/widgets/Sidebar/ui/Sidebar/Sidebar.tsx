import React, { useState } from 'react';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.component, { [cls.collapsed]: collapsed }, [className as string])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        /* eslint-disable-next-line i18next/no-literal-string */
      >
        toggle
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
