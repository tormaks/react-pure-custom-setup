import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from '@/pages/NotFoundPage/ui/NotFoundPage.module.scss';
import { classNames } from '@/shared/lib/classNames';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation('profile');

  return (
    <div
      className={classNames(classes.component, {}, [className as string])}
    >
      {t('Профиль')}
    </div>
  );
};

export default ProfilePage;
