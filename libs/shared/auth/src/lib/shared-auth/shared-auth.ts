import { computed, inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  signalStore,
  withState,
  withMethods,
  patchState,
  withComputed,
} from '@ngrx/signals';
import { AuthService } from '../services/auth.service';
import { debounceTime, pipe, switchMap, tap } from 'rxjs';

interface AuthState {
  id: number | null;
  username: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState = {
  id: null,
  username: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState<AuthState>(initialState),
  withComputed(({ accessToken }) => ({
    // This updates automatically whenever accessToken changes
    isLoggedIn: computed(() => !!accessToken()),
  })),
  withMethods((store, authService = inject(AuthService)) => ({
    login: rxMethod<{ username: string; password: string }>(
      pipe(
        // Start the stream
        debounceTime(300),
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap(({ username, password }) =>
          authService.login(username, password).pipe(
            // Nested pipe for the API call
            tap({
              next: (response) => {
                localStorage.setItem('accessToken', response.accessToken);
                localStorage.setItem('refreshToken', response.refreshToken);
                patchState(store, {
                  id: response.id,
                  username: response.username,
                  accessToken: response.accessToken,
                  refreshToken: response.refreshToken,
                  isAuthenticated: true,
                  isLoading: false,
                });
              },
              error: (err: string) =>
                patchState(store, {
                  error: err,
                  isLoading: false,
                }),
            })
          )
        )
      ) // Close the main pipe
    ), // Close the rxMethod
  }))
);
export default AuthStore;
