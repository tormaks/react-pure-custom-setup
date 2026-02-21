import { CSSProperties, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames';
import classes from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, size } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <img
      src={src}
      style={styles}
      alt={src}
      className={classNames(classes.component, {}, [className])}
    />
  );
};
