/* eslint-disable no-restricted-globals */
import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div
      className={classNames(cls.component, {}, [className as string])}
    >
      <p>{t('Что-то пошло не так!')}</p>
      <Button onClick={reloadPage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
