/* eslint-disable no-param-reassign */
import path from 'path';
import { Configuration, DefinePlugin } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

/**
 * @param {{ config }} - объект с полем старого webpack-конфига для storybook
 * @return {config} - новый webpack-конфиг для storybook
 */
export default ({ config }: { config: Configuration }) => {
  const srcPath = path.resolve(__dirname, '..', '..', 'src');

  /**
   * Отключение обработки файлов с расширением .svg у дефолтного лоудера storybook
   */
  config!.module!.rules = config?.module?.rules?.map((rule: any) => {
    if (/svg/.test(rule.test as string)) {
      return {
        ...rule,
        exclude: /\.svg$/i,
      };
    }

    return rule;
  });

  /**
   * Подключение своих решений из глобального webpack-конфига
   */
  config?.module?.rules?.push(buildCssLoader(true));
  config?.module?.rules?.push(buildSvgLoader());
  config.resolve?.modules?.push(srcPath);
  config?.resolve?.extensions?.push('.tsx', '.ts');
  config.resolve!.alias = {
    ...config?.resolve?.alias,
    '@': srcPath,
  };
  config?.plugins?.push(new DefinePlugin({
    __IS_DEV__: true,
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  return config;
};
