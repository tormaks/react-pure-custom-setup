import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ProfileCard } from '@/entities/Profile';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { getProfileError } from '../../model/selectors/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import classes from './EditableProfileCard.module.scss';

export const EditableProfileCard = () => {
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
    dispatch(profileActions.setReadonly(true));
  }, [dispatch]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value }));
  }, [dispatch]);

  return (
    <div
      className={classNames(classes.component, {}, [])}
    >
      <div className={classes.header}>
        <Text title={t('Профиль')} />
        {readonly ? (
          <Button
            disabled={isLoading || Boolean(error)}
            theme="outline"
            onClick={onEdit}
          >
            {t('Редактировать')}
          </Button>
        )
          : (
            <div className={classes.editBtns}>
              <Button
                theme="outline_red"
                onClick={onCancelEdit}
              >
                {t('Отменить')}
              </Button>
              <Button
                theme="outline"
                onClick={onSave}
              >
                {t('Сохранить')}
              </Button>
            </div>
          )}
      </div>
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
      />
    </div>
  );
};
