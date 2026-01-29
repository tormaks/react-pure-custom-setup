import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';

import { useTheme } from '@/app/providers/theme';
import { classNames } from '@/shared/lib/classNames';
import { Portal } from '@/shared/ui/Portal';
import classes from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  const [isCLosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  const mods: Record<string, boolean> = {
    [classes.opened]: isOpen as boolean,
    [classes.closing]: isCLosing as boolean,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onClickContent: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(classes.component, mods, [className as string, theme])}
      >
        <div className={classes.overlay} onClick={closeHandler}>
          <div className={classes.content} onClick={onClickContent}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
