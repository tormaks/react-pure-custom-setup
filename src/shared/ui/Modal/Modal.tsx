import {
  ReactNode, MouseEventHandler, useCallback, useEffect, useRef, useState, MutableRefObject,
} from 'react';

import { useTheme } from '@/app/providers/theme';
import { classNames, Mods } from '@/shared/lib/classNames';
import { Portal } from '@/shared/ui/Portal';
import classes from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  const [isCLosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const { theme } = useTheme();

  const mods: Mods = {
    [classes.opened]: isOpen,
    [classes.closing]: isCLosing,
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

  const onClickContent: MouseEventHandler<HTMLDivElement> = (e) => {
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
