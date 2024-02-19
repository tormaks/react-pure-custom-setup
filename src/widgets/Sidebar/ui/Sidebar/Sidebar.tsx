import React, { useState } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div
      className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
