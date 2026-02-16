/* eslint-disable no-unused-vars */
export type Mods = Record<string, boolean | string | undefined | null>

export const classNames = (
  classes: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string => [
  classes,
  ...additional.filter(Boolean),
  ...Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className),
]
  .join(' ');
