import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { ReactWrapper } from './react-wrapper/react-wrapper';
import { authGuard, LoginComponent } from '@mfe-angular-react-nx/shared-auth';

export const appRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
  {
    path: 'nexa-commerce',
    canActivate: [authGuard], // Protect this route with the auth guard
    loadChildren: () =>
      loadRemote<typeof import('nexa-commerce/Routes')>(
        'nexa-commerce/Routes'
      ).then((m) => m!.remoteRoutes),
  },
  {
    path: 'nexa-identity',
    canActivate: [authGuard],
    loadChildren: () =>
      loadRemote<typeof import('nexa-identity/Routes')>(
        'nexa-identity/Routes'
      ).then((m) => m!.remoteRoutes),
  },
  {
    path: 'nexa-kitchen',
    canActivate: [authGuard],
    component: ReactWrapper, // the Angular wrapper component which will load any React web component
    data: {
      elementName: 'wc-remote3', // the name of the custom element which is a React web component
      loadChildren: () => import('nexa-kitchen/Module'), // the dynamic import of the React web component
    },
  },
];
