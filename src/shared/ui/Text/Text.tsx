import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames';
import classes from './Text.module.scss';

type TextTheme = 'primary' | 'error';

type TextAlign = 'left' | 'center' | 'right';

interface TextProps {
  className?: string;
  title?: string;
  description?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    description,
    theme = 'primary',
    align = 'left',
  } = props;

  return (
    <div
      className={classNames(classes.component, {}, [className, classes[theme], classes[align]])}
    >
      {title && <p className={classes.title}>{title}</p>}
      {description && <p className={classes.description}>{description}</p>}
    </div>
  );
});
