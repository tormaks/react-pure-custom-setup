/* eslint-disable no-restricted-globals */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import classes from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo((props: PageErrorProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div
      className={classNames(classes.component, {}, [className])}
    >
      <p>{t('Что-то пошло не так!')}</p>
      <Button onClick={reloadPage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
});
