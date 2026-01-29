import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div
      className={classNames(classes.component, {}, [className as string])}
    >
      <Input
        className={classes.input}
        placeholder={t('Введите username')}
        type="text"
      />
      <Input
        className={classes.input}
        placeholder={t('Введите пароль')}
        type="text"
      />
      <Button className={classes.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
