import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/Button';

export const BugButton = memo(() => {
  const { t } = useTranslation();

  const [error, setError] = useState<undefined | boolean>(undefined);

  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={onThrow}>
      {t('Воспроизвести ошибку')}
    </Button>
  );
});
