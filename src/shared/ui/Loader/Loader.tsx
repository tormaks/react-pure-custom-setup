import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = memo(({ className }: LoaderProps) => (
  <div
    className={classNames('loader', {}, [className as string])}
  >
    <div />
    <div />
    <div />
  </div>
));
