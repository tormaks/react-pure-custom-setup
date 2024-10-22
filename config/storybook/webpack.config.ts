import path from 'path';
import webpack from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    html: '',
    entry: '',
    build: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config?.module?.rules?.push(buildCssLoader(true));

  config.resolve?.modules?.push(paths.src);
  config?.resolve?.extensions?.push('.tsx', '.ts');

  // eslint-disable-next-line no-param-reassign
  config.resolve!.alias = {
    ...config?.resolve?.alias,
    '@': paths.src,
  };

  return config;
};
