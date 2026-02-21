import { ChangeEvent, memo, useMemo } from 'react';

import { classNames } from '../../lib/classNames';
import classes from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    className, label, options, value, onChange, readonly,
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const optionsList = useMemo(() => options?.map((option) => (
    <option
      key={option.value}
      value={option.value}
      className={classes.option}
    >
      {option.content}
    </option>
  )), [options]);

  return (
    <div
      className={classNames(classes.component, {}, [className as string])}
    >
      {label && (
        <div className={classes.label}>
          {label}
          &nbsp;
        </div>
      )}
      <select
        disabled={readonly}
        value={value}
        onChange={onChangeHandler}
        className={classes.select}
      >
        {optionsList}
      </select>
    </div>
  );
});
