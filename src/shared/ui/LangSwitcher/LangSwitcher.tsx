import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { AppButton, ThemeAppButton } from '../AppButton';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <AppButton
      theme={ThemeAppButton.CLEAR}
      onClick={onToggle}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t('Язык')}
    </AppButton>
  );
};
