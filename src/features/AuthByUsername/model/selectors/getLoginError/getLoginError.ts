import { StateSchema } from '@/app/providers/storeProvider';

export const getLoginError = (state: StateSchema): string => state.loginForm?.error || '';
