import React from 'react';

import { classNames } from '@/shared/lib/classNames';
import classes from './Text.module.scss';

type TextTheme = 'primary' | 'error';

interface TextProps {
  className?: string;
  title?: string;
  description?: string;
  theme?: TextTheme;
}

export const Text: React.FC<TextProps> = (props) => {
  const {
    className,
    title,
    description,
    theme,
  } = props;

  return (
    <div
      className={classNames(classes.component, {}, [className as string, classes[theme as TextTheme]])}
    >
      {title && <p className={classes.title}>{title}</p>}
      {description && <p className={classes.description}>{description}</p>}
    </div>
  );
};
