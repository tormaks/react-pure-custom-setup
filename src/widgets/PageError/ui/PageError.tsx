import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { AppButton } from '@/shared/ui/AppButton';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div
      className={classNames(cls.component, {}, [className])}
    >
      <p>{t('Что-то пошло не так!')}</p>
      <AppButton onClick={reloadPage}>
        {t('Обновить страницу')}
      </AppButton>
    </div>
  );
};
