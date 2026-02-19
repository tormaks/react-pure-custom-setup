import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ProfileCard } from '@/entities/Profile';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { getProfileData } from '../../model/selectors/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading';
import classes from './EditableProfileCard.module.scss';

export const EditableProfileCard = () => {
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  const { t } = useTranslation('profile');

  return (
    <div
      className={classNames(classes.component, {}, [])}
    >
      <div className={classes.header}>
        <Text title={t('Профиль')} />
        <Button theme="outline">
          {t('Редактировать')}
        </Button>
      </div>
      <ProfileCard
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};
