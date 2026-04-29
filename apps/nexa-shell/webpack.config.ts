import { withModuleFederation } from '@nx/module-federation/angular';
import config from './module-federation.config';
import { Configuration } from 'webpack';

export default async (webpackConfig: Configuration) => {
  const federatedConfig = await withModuleFederation(config, { dts: false });

  const finalConfig = federatedConfig(webpackConfig);

  return {
    ...finalConfig,
    ignoreWarnings: [
      { module: /node_modules\/@module-federation/ },
      /Failed to parse source map/,
    ],
  };
};
