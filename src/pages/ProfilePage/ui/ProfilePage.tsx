import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ReducersList } from '@/app/providers/storeProvider';
import { EditableProfileCard, fetchProfileData, profileReducer } from '@/features/EditableProfileCard';
import { classNames } from '@/shared/lib/classNames';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import classes from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div
        className={classNames(classes.component, {}, [className])}
      >
        <EditableProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
