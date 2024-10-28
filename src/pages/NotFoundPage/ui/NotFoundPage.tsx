import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation('notFound');

  return (
    <div
      className={classNames(classes.component, {}, [className as string])}
    >
      {t('Страница не найдена')}
    </div>
  );
};
