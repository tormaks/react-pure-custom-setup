import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();

  const onToggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme="clear"
      onClick={onToggle}
      className={classNames('', {}, [className as string])}
    >
      {short ? t('Короткий язык') : t('Язык')}
    </Button>
  );
};
