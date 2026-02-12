import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ReducersList } from '@/app/providers/storeProvider';
import { profileReducer } from '@/entities/Profile';
import { classNames } from '@/shared/lib/classNames';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader';
import classes from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;

  const { t } = useTranslation('profile');

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div
        className={classNames(classes.component, {}, [className as string])}
      >
        {t('Профиль')}
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
