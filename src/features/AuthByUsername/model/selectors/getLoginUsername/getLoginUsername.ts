import { StateSchema } from '@/app/providers/storeProvider';

export const getLoginUsername = (state: StateSchema): string => state.loginForm?.username || '';
