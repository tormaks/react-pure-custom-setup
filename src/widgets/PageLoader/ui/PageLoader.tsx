import React from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Loader } from '@/shared/ui/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ className }) => (
  <div
    className={classNames(cls.component, {}, [className])}
  >
    <Loader />
  </div>
);
