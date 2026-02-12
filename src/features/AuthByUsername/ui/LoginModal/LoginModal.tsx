import { memo, Suspense } from 'react';

import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';
import { LoginForm } from '../LoginForm';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginForm onClose={onClose} />
      </Suspense>
    </Modal>
  );
});
