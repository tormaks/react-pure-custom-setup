import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import classes from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;

  const { t } = useTranslation('profile');

  return (
    <div
      className={classNames(classes.component, {}, [className as string])}
    >
      {t('Профиль')}
    </div>
  );
});

export default ProfilePage;
