import { useTranslation } from 'react-i18next';

import { IProfile } from '@/features/EditableProfileCard';
import { classNames } from '@/shared/lib/classNames';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
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

  if (isLoading) {
    return (
      <div className={classNames(classes.component, {}, [className, classes.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(classes.component, {}, [className, classes.error])}>
        <Text
          theme="error"
          align="center"
          title={t('Произошла ошибка при загрузке профиля')}
          description={t('Попробуйте обновить страницу ')}
        />
      </div>
    );
  }

  return (
    <div
      className={classNames(classes.component, {}, [className])}
    >
      <Input
        value={data?.first}
        placeholder={t('Ваше имя')}
      />
      <Input
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
      />
    </div>
  );
};
