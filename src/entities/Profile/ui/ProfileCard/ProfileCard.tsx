import { useTranslation } from 'react-i18next';

import { IProfile } from '@/features/EditableProfileCard'; // FIXME: FSD Error
import { classNames } from '@/shared/lib/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Text } from '@/shared/ui/Text/Text';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: IProfile;
  isLoading: boolean;
  error: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
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
      {data?.avatar && (
        <div className={classes.avatarWrapper}>
          <Avatar src={data?.avatar} size={120} />
        </div>
      )}
      <Input
        onChange={onChangeFirstname}
        readonly={readonly}
        value={data?.first}
        placeholder={t('Ваше имя')}
      />
      <Input
        onChange={onChangeLastname}
        readonly={readonly}
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
      />
      <Input
        type="number"
        onChange={onChangeAge}
        readonly={readonly}
        value={data?.age}
        placeholder={t('Ваш возраст')}
      />
      <Input
        onChange={onChangeCity}
        readonly={readonly}
        value={data?.city}
        placeholder={t('Город')}
      />
      <Input
        onChange={onChangeUsername}
        readonly={readonly}
        value={data?.username}
        placeholder={t('Введите имя пользователя')}
      />
      <Input
        onChange={onChangeAvatar}
        readonly={readonly}
        value={data?.avatar}
        placeholder={t('Введите ссылку на аватар')}
      />
    </div>
  );
};
