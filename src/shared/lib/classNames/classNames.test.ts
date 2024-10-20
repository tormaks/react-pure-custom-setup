import { classNames } from '@/shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    expect(classNames(
      'someClass',
      {},
      ['additionalClass'],
    )).toBe('someClass additionalClass');
  });

  test('with mods', () => {
    expect(classNames(
      'someClass',
      {
        modeTrueClass: true,
        modeFalseClass: false,
        modeUndefinedClass: undefined,
        modeNullClass: null,
      },
    )).toBe('someClass modeTrueClass');
  });

  test('with all params', () => {
    expect(classNames(
      'someClass',
      { modeTrueClass: true },
      ['additionalClass'],
    ))
      .toBe('someClass additionalClass modeTrueClass');
  });
});
