import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'nexa-shell',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  remotes: ['nexa-commerce', 'nexa-identity', 'nexa-kitchen'],
  shared: (libName, defaultConfig) => {
    // 1. Angular Core - Singleton + Strict
    if (
      ['@angular/core', '@angular/common', '@angular/router'].includes(libName)
    ) {
      return {
        ...defaultConfig,
        singleton: true,
        strictVersion: true,
      };
    }

    // 2. React - Singleton (Strict version false to allow minor drift)
    if (['react', 'react-dom'].includes(libName)) {
      return {
        ...defaultConfig,
        singleton: true,
        strictVersion: false,
      };
    }

    // 3. NgRx - Singleton
    if (libName.startsWith('@ngrx')) {
      return {
        ...defaultConfig,
        singleton: true,
      };
    }

    return defaultConfig;
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
