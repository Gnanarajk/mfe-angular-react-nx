import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { ReactWrapper } from './react-wrapper/react-wrapper';

export const appRoutes: Route[] = [
  {
    path: 'nexa-commerce',
    loadChildren: () =>
      loadRemote<typeof import('nexa-commerce/Routes')>(
        'nexa-commerce/Routes'
      ).then((m) => m!.remoteRoutes),
  },
  {
    path: 'nexa-identity',
    loadChildren: () =>
      loadRemote<typeof import('nexa-identity/Routes')>(
        'nexa-identity/Routes'
      ).then((m) => m!.remoteRoutes),
  },
  {
    path: 'nexa-kitchen',
    component: ReactWrapper, // the Angular wrapper component which will load any React web component
    data: {
      elementName: 'wc-remote3', // the name of the custom element which is a React web component
      loadChildren: () => import('nexa-kitchen/Module'), // the dynamic import of the React web component
    },
  },
];
