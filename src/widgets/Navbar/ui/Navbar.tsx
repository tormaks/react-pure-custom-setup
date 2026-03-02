import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const onCloseAuthModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowAuthModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(classes.component, {}, [className])}>
        <Button className={classes.links} theme="outlineInverted" onClick={onLogout}>
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(classes.component, {}, [className])}>
      <Button className={classes.links} theme="outline" onClick={onShowAuthModal}>
        {t('Войти')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal} />
      )}
    </div>
  );
});
