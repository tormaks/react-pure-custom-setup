import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ProfileCard } from '@/entities/Profile';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { getProfileData } from '../../model/selectors/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import classes from './EditableProfileCard.module.scss';

export const EditableProfileCard = () => {
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(true));
  }, [dispatch]);

  return (
    <div
      className={classNames(classes.component, {}, [])}
    >
      <div className={classes.header}>
        <Text title={t('Профиль')} />
        {readonly ? (
          <Button
            theme="outline"
            onClick={onEdit}
          >
            {t('Редактировать')}
          </Button>
        ) : (
          <Button
            theme="outline"
            onClick={onCancelEdit}
          >
            {t('Отменить')}
          </Button>
        )}
      </div>
      <ProfileCard
        data={data}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
      />
    </div>
  );
};
