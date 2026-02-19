import { useSelector } from 'react-redux';

import { ProfileCard } from '@/entities/Profile';
import { getProfileData } from '../../model/selectors/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading';

export const EditableProfileCard = () => {
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <ProfileCard
      data={data}
      isLoading={isLoading}
      error={error}
    />
  );
};
