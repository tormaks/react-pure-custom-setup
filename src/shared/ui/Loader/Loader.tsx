import React from 'react';

import { classNames } from '@/shared/lib/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ className }) => (
  <div
    className={classNames(cls.component, {}, [className])}
  >
    <div />
    <div />
    <div />
  </div>
);
