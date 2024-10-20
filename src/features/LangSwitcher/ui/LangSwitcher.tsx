import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const onToggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={onToggle}
      className={classNames('', {}, [className as string])}
    >
      {t('Язык')}
    </Button>
  );
};
