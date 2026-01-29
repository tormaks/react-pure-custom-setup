import React from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Modal } from '@/shared/ui/Modal';
import { LoginForm } from '../LoginForm';
import classes from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      className={classNames(classes.component, {}, [className as string])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  );
};
