import { ChangeEvent, InputHTMLAttributes, memo } from 'react';

import { classNames } from '@/shared/lib/classNames';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps{
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    ...otherProps
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div
      className={classNames(classes.component, {}, [className])}
    >
      <input
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={classes.input}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  );
});
