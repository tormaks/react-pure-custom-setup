/* eslint-disable react/prop-types */
import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { loginActions } from '@/features/AuthByUsername';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { getLogin } from '../../model/selectors/getLogin';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = memo((props) => {
  const { className } = props;
  const dispatch = useDispatch();
  const {
    username,
    password,
    isLoading,
    error,
  } = useSelector(getLogin);

  const { t } = useTranslation();

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onClickLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div
      className={classNames(classes.component, {}, [className as string])}
    >
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Input
        className={classes.input}
        placeholder={t('Введите username')}
        type="text"
        value={username}
        onChange={onChangeUsername}
      />
      <Input
        className={classes.input}
        placeholder={t('Введите пароль')}
        type="text"
        value={password}
        onChange={onChangePassword}
      />
      <Button
        className={classes.loginBtn}
        onClick={onClickLogin}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
