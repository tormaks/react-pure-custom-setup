import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text/Text';
import { getProfileData } from '../../model/selectors/getProfileData';
// import { getProfileError } from '../../model/selectors/getProfileError';
// import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props;

  const data = useSelector(getProfileData);
  // const isLoading = useSelector(getProfileIsLoading);
  // const error = useSelector(getProfileError);

  const { t } = useTranslation('profile');

  return (
    <div
      className={classNames(classes.component, {}, [className])}
    >
      <div className={classes.header}>
        <Text title={t('Профиль')} />
        <Button theme="outline">
          {t('Редактировать')}
        </Button>
      </div>
      <div className={classes.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
        />
      </div>
    </div>
  );
};
