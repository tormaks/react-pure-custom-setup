import { StateSchema } from '@/app/providers/storeProvider';

export const getLoginError = (state: StateSchema): string | undefined => state.loginForm?.error;
