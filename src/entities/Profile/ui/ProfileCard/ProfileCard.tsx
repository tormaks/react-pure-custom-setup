import { useTranslation } from 'react-i18next';

import { IProfile } from '@/features/EditableProfileCard';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text/Text';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: IProfile;
  isLoading: boolean;
  error: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className, data, isLoading, error,
  } = props;

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
